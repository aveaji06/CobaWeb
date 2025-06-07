import React, { useEffect, useState } from 'react';
import GaugeComponent from 'react-gauge-component';

interface SensorData {
  Temperature: { nilai: number } | null;
  Humidity: { nilai: number } | null;
  Light: { nilai: number } | null;
  CO2: { nilai: number } | null;
  NH3: { nilai: number } | null;
  PM10: { nilai: number } | null;
  PM2_5: { nilai: number } | null;
  RTD_Temp:  { nilai: number } | null;
}

const SensorCard = ({
  title,
  data,
  unit,
  sensorColor,
  id,
  minValue,
  maxValue,
  thresholds,
}: {
  title: string;
  data: number;
  unit: string;
  sensorColor: string;
  id: string;
  minValue: number;
  maxValue: number;
  thresholds: Array<{ limit: number; color: string; tooltipText: string }>;
}) => {
  return (
<div className={`order-2 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 card 2xl:col-span-3 group-data-[skin=bordered]:border-${sensorColor}-500/20 relative overflow-hidden`}>
  <div className="card-body">
    <p className="dark:text-white text-black">{title}</p>
    <div className="flex items-center justify-center dark:text-white text-black">
      <div className="w-21">
        <GaugeComponent
          type="semicircle"
          arc={{
            width: 0.2,
            padding: 0.005,
            cornerRadius: 1,
            subArcs: thresholds.map((threshold) => ({
              limit: threshold.limit,
              color: threshold.color,
              showTick: true,
              tooltip: {
                text: threshold.tooltipText,
              },
            })),
          }}
          pointer={{
            color: '#345243',
            length: 0.8,
            width: 15,
          }}
          labels={{
            valueLabel: {
              formatTextValue: (value: number) => value + unit,
              style: { fontSize: 24,fill: 'currentColor' },
            },
            tickLabels: {
              type: 'outer',
              defaultTickValueConfig: {
                formatTextValue: (value: number) => String(value),
                style: { fontSize: 10, fill: 'currentColor' },
              },
              ticks: [
                { value: minValue },
                { value: maxValue },
              ],
            },
          }}
          value={data}
          minValue={minValue}
          maxValue={maxValue}
        />
      </div>
    </div>
  </div>
 </div>
  );
};

const Spido = () => {
  const [sensorData, setSensorData] = useState<SensorData>({
  Temperature: null,
  Humidity: null,
  Light: null,
  CO2: null,
  NH3: null,
  PM10: null,
  PM2_5: null,
  RTD_Temp: null,  // Menambahkan suhu kandang dari IoT-Env-Current
});

const fetchSensorData = async (sensorType: string) => {
    try {
      // const response = await fetch(`https://ta-ayam-be.vercel.app/api/latest/${sensorType}`);
      const response = await fetch(`https://ta-ayam-be.vercel.app/api/latest/${sensorType}`);
      const data = await response.json();

      if (data && data.nilai !== undefined) {
        setSensorData((prevData) => ({
          ...prevData,
          [sensorType]: { nilai: data.nilai },
        }));
      }
    } catch (error) {
      console.error(`Fetch error for ${sensorType}:`, error);
    }
  };

useEffect(() => {
  const sensorTypes = ['Temperature', 'Humidity', 'Light', 'NH3', 'CO2', 'PM10','PM2_5', 'RTD_Temp']; // Menambahkan suhuKandang
  sensorTypes.forEach((sensorType) => {
    fetchSensorData(sensorType);
  });

  const intervalId = setInterval(() => {
    sensorTypes.forEach((sensorType) => {
      fetchSensorData(sensorType);
    });
  }, 10000);

  return () => clearInterval(intervalId);
}, []);


  return (
    <React.Fragment>
      <div className="mb-2"></div>
      <h3 className="text-black col-span-12">Data Sensor Real-Time</h3>
      <SensorCard
        title="Suhu Ayam"
        data={sensorData.Temperature?.nilai ?? 0}
        unit="°C"
        sensorColor="red"
        id="gauge-chart-1"
        minValue={10}
        maxValue={35}
        thresholds={[
          { limit: 15, color: '#EA4228', tooltipText: 'Too low temperature!' },
          { limit: 17, color: '#F5CD19', tooltipText: 'Low temperature!' },
          { limit: 30, color: '#5BE12C', tooltipText: 'OK temperature!' },
          { limit: 32, color: '#F5CD19', tooltipText: 'High temperature!' },
          { limit: 35, color: '#EA4228', tooltipText: 'Too high temperature!' },
        ]}
      />

      <SensorCard
        title="Kelembaban"
        data={sensorData.Humidity?.nilai ?? 0}
        unit="%"
        sensorColor="blue"
        id="gauge-chart-2"
        minValue={0}
        maxValue={100}
        thresholds={[
          { limit: 50, color: '#F5CD19', tooltipText: 'Low humidity!' }, // Batas bawah untuk kelembaban rendah
          { limit: 70, color: '#5BE12C', tooltipText: 'OK humidity!' }, // Batas hijau untuk kelembaban optimal
          { limit: 100, color: '#F5CD19', tooltipText: 'High humidity!' }, // Batas atas untuk kelembaban tinggi
        ]}
      />




      <SensorCard
        title="Kadar CO2"
        data={sensorData.CO2?.nilai ?? 0}
        unit="ppm"
        sensorColor="green"
        id="gauge-chart-3"
        minValue={0}
        maxValue={5000}
        thresholds={[
          { limit: 2000, color: '#5BE12C', tooltipText: 'OK CO2 level!' },
          { limit: 3000, color: '#F5CD19', tooltipText: 'High CO2 level!' },
          { limit: 5000, color: '#EA4228', tooltipText: 'Too high CO2 level!' },
        ]}
      />

      <SensorCard
        title="Kadar NH3"
        data={sensorData.NH3?.nilai ?? 0}
        unit="ppm"
        sensorColor="orange"
        id="gauge-chart-4"
        minValue={0}
        maxValue={100}
        thresholds={[
          { limit: 25, color: '#5BE12C', tooltipText: 'OK NH3 level!' },
          { limit: 50, color: '#F5CD19', tooltipText: 'High NH3 level!' },
          { limit: 100, color: '#EA4228', tooltipText: 'Too high NH3 level!' },
        ]}
      />
      
      <SensorCard
        title="Suhu Lingkungan"
        data={sensorData.RTD_Temp?.nilai ?? 0}
        unit="°C"
        sensorColor="red"
        id="gauge-chart-1"
        minValue={10}
        maxValue={35}
        thresholds={[
          { limit: 15, color: '#EA4228', tooltipText: 'Too low temperature!' },
          { limit: 17, color: '#F5CD19', tooltipText: 'Low temperature!' },
          { limit: 30, color: '#5BE12C', tooltipText: 'OK temperature!' },
          { limit: 32, color: '#F5CD19', tooltipText: 'High temperature!' },
          { limit: 35, color: '#EA4228', tooltipText: 'Too high temperature!' },
        ]}
      />

      <SensorCard
        title="Level Debu PM2.5"
        data={sensorData.PM2_5?.nilai ?? 0}
        // unit="ug/m³"
        unit="ug/m³"
        sensorColor="purple"
        id="gauge-chart-5"
        minValue={0}
        maxValue={100}
        thresholds={[
          { limit: 5, color: '#5BE12C', tooltipText: 'OK dust level!' },
          { limit: 10, color: '#F5CD19', tooltipText: 'High dust level!' },
          { limit: 100, color: '#EA4228', tooltipText: 'Too high dust level!' },
        ]}
      />

      <SensorCard
        title="Level Debu PM10"
        data={sensorData.PM10?.nilai ?? 0}
        // unit="ug/m³"
        unit="ug/m³"
        sensorColor="purple"
        id="gauge-chart-5"
        minValue={0}
        maxValue={100}
        thresholds={[
          { limit: 5, color: '#5BE12C', tooltipText: 'OK dust level!' },
          { limit: 10, color: '#F5CD19', tooltipText: 'High dust level!' },
          { limit: 100, color: '#EA4228', tooltipText: 'Too high dust level!' },
        ]}
      />

      <SensorCard
        title="Level Cahaya"
        data={sensorData.Light?.nilai ?? 0}
        unit="Lux"
        sensorColor="yellow"
        id="gauge-chart-6"
        minValue={0}
        maxValue={1000}
        thresholds={[
          { limit: 200, color: '#5BE12C', tooltipText: 'OK light level!' },
          { limit: 400, color: '#F5CD19', tooltipText: 'High light level!' },
          { limit: 1000, color: '#EA4228', tooltipText: 'Too high light level!' },
        ]}
      />
    </React.Fragment>
  );
};

export default Spido;
