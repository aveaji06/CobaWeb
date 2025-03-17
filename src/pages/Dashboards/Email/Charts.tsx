import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const WidgetChart = ({ series, chartId, DataChartColor }: any) => {

    const chartColors = useChartColors(chartId);

    //sent email
    var options: any = {
        chart: {
            id: 'area-datetime',
            type: 'line',
            height: 80,
            sparkline: {
                enabled: true
            },
            zoom: {
                autoScaleYaxis: true
            }
        },
        colors: chartColors,
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        dataLabels: {
            enabled: false
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={[...series]}
                data-chart-colors={DataChartColor}
                id={chartId}
                className="grow apex-charts"
                type='line'
                height={80}
            />
        </React.Fragment>
    );
};

const Widget2Chart = ({ series, chartId, DataChartColor }: any) => {

    const chartColors = useChartColors(chartId);

    //sent email
    var options: any = {
        chart: {
            id: 'area-datetime',
            type: 'bar',
            height: 80,
            sparkline: {
                enabled: true
            },
            zoom: {
                autoScaleYaxis: true
            }
        },
        colors: chartColors,
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        dataLabels: {
            enabled: false
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={[...series]}
                data-chart-colors={DataChartColor}
                id={chartId}
                className="grow apex-charts"
                type='bar'
                height={80}
            />
        </React.Fragment>
    );
};

const EnvironmentComparisonChart = ({ chartId } : any) => {
    const chartColors = useChartColors(chartId);

    // Data representing the old environment vs. the optimized one
    const series = [
        {
            name: "Old Environment",
            data: [25, 24, 23, 22, 21, 25, 26, 27, 26] // Example data for temperature
        },
        {
            name: "Optimized Environment",
            data: [22, 23, 24, 25, 24, 23, 22, 21, 22] // Example data for temperature after optimization
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            },
        },
        colors: chartColors,
        stroke: {
            curve: 'smooth',
            width: 3
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        markers: {
            size: 5,
            hover: {
                sizeOffset: 1
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'], // Example time periods
            title: {
                text: "Months"
            }
        },
        yaxis: {
            title: {
                text: "Temperature (°C)" // Example metric being measured
            }
        },
        tooltip: {
            y: {
                formatter: function (val: number) {
                    return `${val} °C`; // Adjust formatter based on the metric
                }
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                id={chartId}
                className="apex-charts"
                type='line'
                height={350}
            />
        </React.Fragment>
    );
};


const EmailDataChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //sent email
    const series = [
        {
            name: "Open Rate",
            data: [28, 29, 31, 36, 32, 32, 33, 40, 37]
        },
        {
            name: "Click Rate",
            data: [26, 41, 40, 51, 49, 62, 69, 52, 58]
        }
    ];
    var options: any = {
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            },
        },
        colors: chartColors,
        stroke: {
            curve: 'smooth',
            width: 3
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        markers: {
            size: 5,
            hover: {
                sizeOffset: 1
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500", "bg-purple-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={350}
            />
        </React.Fragment>
    );
};

const EmailMarketingChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //email marketing chart
    const series = [44, 55, 67];
    var options : any = {
        chart: {
            height: 410,
            type: 'radialBar',
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w : any) {
                            return 249;
                        }
                    }
                },
                track: {
                    margin: 14,
                }
            }
        },
        colors: chartColors,
        labels: ['Sent', 'Opened', 'Not Opened'],
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-sky-500", "bg-green-500", "bg-red-500"]'
                id={chartId}
                className="apex-charts"
                type='radialBar'
                height={410}
            />
        </React.Fragment>
    );
};

const EnvironmentPerformanceChart = ({ chartId } :  any) => {
    const chartColors = useChartColors(chartId);

    // Data for the KPIs in the automatic chicken farm
    const series = [78, 85, 92]; // Example percentages of performance metrics

    const options: any = {
        chart: {
            height: 410,
            type: 'radialBar',
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Overall Performance',
                        formatter: function (w: any) {
                            // Calculate the average performance for the total
                            return (series.reduce((a, b) => a + b, 0) / series.length).toFixed(2) + '%';
                        }
                    }
                },
                track: {
                    margin: 14,
                }
            }
        },
        colors: chartColors,
        labels: ['Temperature Control', 'Humidity Management', 'Feed Efficiency'], // Labels for the KPIs
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["#1E90FF", "#32CD32", "#FFD700"]' // Example colors
                id={chartId}
                className="apex-charts"
                type='radialBar'
                height={410}
            />
        </React.Fragment>
    );
};
export {
    WidgetChart,
    EnvironmentComparisonChart,
    EnvironmentPerformanceChart,
    Widget2Chart,
    EmailDataChart,
    EmailMarketingChart
};
