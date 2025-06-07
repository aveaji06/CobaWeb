import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import DataHistoris from './DataHistoris';
import Forensik from './Forensik';

const EmailDashboard = () => {

    return (
        <React.Fragment>
            {/* <BreadCrumb title='Historical Data' pageTitle='Dashboards' /> */}
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-2">
                {/* <DataHistoris /> */}
                <Forensik />
            </div>
        </React.Fragment>
    );
};

export default EmailDashboard;
