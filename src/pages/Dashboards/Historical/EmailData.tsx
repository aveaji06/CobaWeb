import { Dropdown } from 'Common/Components/Dropdown';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import {EnvironmentComparisonChartSuhu, EnvironmentComparisonChartKelembaban, EnvironmentComparisonChartCO2, EnvironmentComparisonChartDebu, EnvironmentComparisonChartNH3} from './Charts';
import { Link } from 'react-router-dom';

const EmailData = () => {
    return (
        <React.Fragment>
            <div className="col-span-6 card 2xl:col-span-6">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartSuhu chartId="environmentDataChartSuhu" />
                </div>
            </div>
            <div className="col-span-6 card 2xl:col-span-6">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartKelembaban chartId="environmentDataChartKelembaban" />
                </div>
            </div>
            <div className="col-span-6 card 2xl:col-span-6">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartNH3 chartId="environmentDataChartNH3" />
                </div>
            </div>
            <div className="col-span-6 card 2xl:col-span-6">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartCO2 chartId="environmentDataChartCO2" />
                </div>
            </div>
            <div className="col-span-6 card 2xl:col-span-6">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                    </div>
                    <EnvironmentComparisonChartDebu chartId="environmentDataChartDebu" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmailData;
