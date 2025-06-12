import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import dayjs from "dayjs";
import "dayjs/locale/id"; // Pastikan locale Indonesia di-import

const EnvironmentComparisonChartSuhu = ({ chartId, selectedDateRange }: any) => {
    const chartColors = useChartColors(chartId);
    const [datasensor, setSensorData] = useState<any[] | null>(null);

    useEffect(() => {
        if (selectedDateRange) {
            const startDate = selectedDateRange[0].toLocaleDateString();
            const endDate = selectedDateRange[1].toLocaleDateString();
            fetch(`https://ta-ayam-be.vercel.app/api/forensic/Temperature?start_date=${startDate}&end_date=${endDate}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Sensor Data Suhu:", data);
                    if (Array.isArray(data)) {
                        setSensorData(data);
                    } else {
                        console.error("Data is not an array:", data);
                        setSensorData([]); // Set empty array if the response is not valid
                    }
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    setSensorData([]); // Handle error by setting an empty array
                });
        }
    }, [selectedDateRange]);

    // Check if datasensor is valid (array) before attempting to map over it
    if (!datasensor || !Array.isArray(datasensor)) {
        return <p>Loading data suhu...</p>;
    }

    const formattedData = datasensor.map((item) => ({
        label: dayjs(item.tanggal).locale('id').format("D MMMM YY"), // Format: 7 Juni 2025
        value: item.nilai,
    }));

    const uniqueLabels = formattedData.map((item, index, self) =>
        index > 0 && item.label === self[index - 1].label ? "" : item.label
    );

    const series = [
        {
            name: "Suhu Kandang",
            data: formattedData.map((item) => item.value),
        },
    ];

    const options: any = {
        chart: {
            height: 350,
            type: "line",
            zoom: { enabled: false },
            toolbar: { show: false },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        dataLabels: { enabled: false },
        colors: chartColors,
        xaxis: {
            categories: uniqueLabels,
        }
    };

    return (
        <div className="chart-container">
            <h2>Grafik Suhu Kandang</h2>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={200}
            />
        </div>
    );
};

// Similar updates for other charts: Kelembaban, CO2, NH3, and Debu

// Kelembaban Chart
const EnvironmentComparisonChartKelembaban = ({ chartId, selectedDateRange }: any) => {
    const chartColors = useChartColors(chartId);
    const [datasensor, setSensorData] = useState<any[] | null>(null);

    useEffect(() => {
        if (selectedDateRange) {
            const startDate = selectedDateRange[0].toLocaleDateString();
            const endDate = selectedDateRange[1].toLocaleDateString();
            fetch(`https://ta-ayam-be.vercel.app/api/forensic/Humidity?start_date=${startDate}&end_date=${endDate}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Sensor Data Kelembaban:", data);
                    if (Array.isArray(data)) {
                        setSensorData(data);
                    } else {
                        console.error("Data is not an array:", data);
                        setSensorData([]);
                    }
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    setSensorData([]);
                });
        }
    }, [selectedDateRange]);

    if (!datasensor || !Array.isArray(datasensor)) {
        return <p>Loading data kelembaban...</p>;
    }

    const formattedData = datasensor.map((item) => ({
        label: dayjs(item.tanggal).locale('id').format("D MMMM YY"),
        value: item.nilai,
    }));

    const uniqueLabels = formattedData.map((item, index, self) =>
        index > 0 && item.label === self[index - 1].label ? "" : item.label
    );

    const series = [
        {
            name: "Kelembaban Kandang",
            data: formattedData.map((item) => item.value),
        },
    ];

    const options: any = {
        chart: {
            height: 350,
            type: "line",
            zoom: { enabled: false },
            toolbar: { show: false },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        dataLabels: { enabled: false },
        colors: chartColors,
        xaxis: {
            categories: uniqueLabels,
        }
    };

    return (
        <div className="chart-container">
            <h2>Grafik Kelembaban Kandang</h2>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={200}
            />
        </div>
    );
};

// CO2 Chart
const EnvironmentComparisonChartCO2 = ({ chartId, selectedDateRange }: any) => {
    const chartColors = useChartColors(chartId);
    const [datasensor, setSensorData] = useState<any[] | null>(null);

    useEffect(() => {
        if (selectedDateRange) {
            const startDate = selectedDateRange[0].toLocaleDateString();
            const endDate = selectedDateRange[1].toLocaleDateString();
            fetch(`https://ta-ayam-be.vercel.app/api/forensic/CO2?start_date=${startDate}&end_date=${endDate}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Sensor Data CO2:", data);
                    if (Array.isArray(data)) {
                        setSensorData(data);
                    } else {
                        console.error("Data is not an array:", data);
                        setSensorData([]);
                    }
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    setSensorData([]);
                });
        }
    }, [selectedDateRange]);

    if (!datasensor || !Array.isArray(datasensor)) {
        return <p>Loading data CO2...</p>;
    }

    const formattedData = datasensor.map((item) => ({
        label: dayjs(item.tanggal).locale('id').format("D MMMM YY"),
        value: item.nilai,
    }));

    const uniqueLabels = formattedData.map((item, index, self) =>
        index > 0 && item.label === self[index - 1].label ? "" : item.label
    );

    const series = [
        {
            name: "CO2 Kandang",
            data: formattedData.map((item) => item.value),
        },
    ];

    const options: any = {
        chart: {
            height: 350,
            type: "line",
            zoom: { enabled: false },
            toolbar: { show: false },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        dataLabels: { enabled: false },
        colors: chartColors,
        xaxis: {
            categories: uniqueLabels,
        }
    };

    return (
        <div className="chart-container">
            <h2>Grafik CO2 Kandang</h2>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={200}
            />
        </div>
    );
};

// NH3 Chart
const EnvironmentComparisonChartNH3 = ({ chartId, selectedDateRange }: any) => {
    const chartColors = useChartColors(chartId);
    const [datasensor, setSensorData] = useState<any[] | null>(null);

    useEffect(() => {
        if (selectedDateRange) {
            const startDate = selectedDateRange[0].toLocaleDateString();
            const endDate = selectedDateRange[1].toLocaleDateString();
            fetch(`https://ta-ayam-be.vercel.app/api/forensic/NH3?start_date=${startDate}&end_date=${endDate}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Sensor Data NH3:", data);
                    if (Array.isArray(data)) {
                        setSensorData(data);
                    } else {
                        console.error("Data is not an array:", data);
                        setSensorData([]);
                    }
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    setSensorData([]);
                });
        }
    }, [selectedDateRange]);

    if (!datasensor || !Array.isArray(datasensor)) {
        return <p>Loading data NH3...</p>;
    }

    const formattedData = datasensor.map((item) => ({
        label: dayjs(item.tanggal).locale('id').format("D MMMM YY"),
        value: item.nilai,
    }));

    const uniqueLabels = formattedData.map((item, index, self) =>
        index > 0 && item.label === self[index - 1].label ? "" : item.label
    );

    const series = [
        {
            name: "NH3 Kandang",
            data: formattedData.map((item) => item.value),
        },
    ];

    const options: any = {
        chart: {
            height: 350,
            type: "line",
            zoom: { enabled: false },
            toolbar: { show: false },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        dataLabels: { enabled: false },
        colors: chartColors,
        xaxis: {
            categories: uniqueLabels,
        }
    };

    return (
        <div className="chart-container">
            <h2>Grafik NH3 Kandang</h2>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={200}
            />
        </div>
    );
};

// Debu Chart
const EnvironmentComparisonChartDebu = ({ chartId, selectedDateRange }: any) => {
    const chartColors = useChartColors(chartId);
    const [datasensor, setSensorData] = useState<any[] | null>(null);

    useEffect(() => {
        if (selectedDateRange) {
            const startDate = selectedDateRange[0].toLocaleDateString();
            const endDate = selectedDateRange[1].toLocaleDateString();
            fetch(`https://ta-ayam-be.vercel.app/api/forensic/PM10?start_date=${startDate}&end_date=${endDate}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Sensor Data PM10:", data);
                    if (Array.isArray(data)) {
                        setSensorData(data);
                    } else {
                        console.error("Data is not an array:", data);
                        setSensorData([]);
                    }
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    setSensorData([]);
                });
        }
    }, [selectedDateRange]);

    if (!datasensor || !Array.isArray(datasensor)) {
        return <p>Loading data PM10...</p>;
    }

    const formattedData = datasensor.map((item) => ({
        label: dayjs(item.tanggal).locale('id').format("D MMMM YY"),
        value: item.nilai,
    }));

    const uniqueLabels = formattedData.map((item, index, self) =>
        index > 0 && item.label === self[index - 1].label ? "" : item.label
    );

    const series = [
        {
            name: "PM10 Kandang",
            data: formattedData.map((item) => item.value),
        },
    ];

    const options: any = {
        chart: {
            height: 350,
            type: "line",
            zoom: { enabled: false },
            toolbar: { show: false },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        dataLabels: { enabled: false },
        colors: chartColors,
        xaxis: {
            categories: uniqueLabels,
        }
    };

    return (
        <div className="chart-container">
            <h2>Grafik PM10 Kandang</h2>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={200}
            />
        </div>
    );
};

export {
    EnvironmentComparisonChartSuhu,
    EnvironmentComparisonChartKelembaban,
    EnvironmentComparisonChartCO2,
    EnvironmentComparisonChartNH3,
    EnvironmentComparisonChartDebu
};
