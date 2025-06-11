import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import useChartColors from 'Common/useChartColors'; // Assuming the custom hook is available

const MortalitasChart: React.FC = () => {
  const [mortalitasData, setMortalitasData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state to track the data fetch
  const [chartOptions, setChartOptions] = useState<any>({}); // Declare chartOptions state

  const chartId = 'mortalitasChart'; // A unique ID for this chart

  // Ensure useChartColors returns a valid array (fallback to empty array if undefined)
  const chartColors = useChartColors(chartId) || [];
  const dataChartColor = chartColors.length > 0 ? chartColors.join(',') : 'rgba(0,0,0,0.5)'; // Use a fallback if chartColors is empty

  useEffect(() => {
    // Fetch the data from the backend
    fetch('https://ta-ayam-be.vercel.app/day/get_mortalitas')
      .then((response) => response.json())
      .then((data) => {
        setMortalitasData(data);

        // Ensure data is available before proceeding
        if (data && Array.isArray(data) && data.length > 0) {
          // Prepare the data for the chart
          const days = data.map((item: any) => `${item.day}`);
          const mortalitas = data.map((item: any) => item.mortalitas_persen);

          // Configure chart options (mimicking the format of your provided template)
          const options = {
            chart: {
              height: 350,
              type: 'line',
            },
            plotOptions: {
              line: {
                curve: 'smooth',
              },
            },
            stroke: {
              width: 2,
              lineCap: 'round',
            },
            xaxis: {
              categories: days,
              title: {
                text: 'Day',
              },
              labels: {
                align: 'left',  // Align labels to the left
              },
            },
            yaxis: {
              title: {
                text: 'Mortalitas (%)',
              },
              labels: {
                formatter: function (value: number) {
                  return Math.round(value); // Round values to the nearest integer
                },
              },
            },
            grid: {
              padding: {
                top: -15,
                bottom: -15,
              },
            },
            series: [
              {
                name: 'Mortalitas (%)',
                data: mortalitas,
              },
            ],
            colors: chartColors, // Apply dynamic colors
          };

          // Set chart options and data
          setChartOptions(options);
        }

        setLoading(false); // Set loading to false when data is ready
      })
      .catch((error) => {
        console.error('Error fetching mortalitas data:', error);
        setLoading(false); // Ensure loading is set to false if there's an error
      });
  }, []);

  // Conditional rendering: show loading message or chart
  if (loading) {
    return <div>Loading chart...</div>; // Show loading message while fetching data
  }

  // Check if the chart options and data are valid
  if (!chartOptions.series || !chartOptions.series.length) {
    return <div>No data available for the chart.</div>;
  }

  return (
    <div className="md:col-span-3 lg:col-span-6 col-span-12 card 2xl:col-span-3">
      <div>
        <h2>Mortalitas Chart</h2>
        <ReactApexChart
          dir="ltr"
          options={chartOptions}
          series={chartOptions.series}
          data-chart-colors={dataChartColor}
          id={chartId}
          className="grow apex-charts"
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default MortalitasChart;
