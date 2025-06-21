import React from 'react';
import {EnvironmentComparisonChartSuhu, EnvironmentComparisonChartKelembaban, EnvironmentComparisonChartCO2, EnvironmentComparisonChartNH3} from './Charts';

const DataHistoris = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartSuhu chartId="environmentDataChartSuhu" />
                </div>
            </div>
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartKelembaban chartId="environmentDataChartKelembaban" />
                </div>
            </div>
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartNH3 chartId="environmentDataChartNH3" />
                </div>
            </div>
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartCO2 chartId="environmentDataChartCO2" />
                </div>
            </div>
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartDebu chartId="environmentDataChartDebu" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default DataHistoris;
