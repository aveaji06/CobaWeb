import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import EmailData from './EmailData';
import EmailMarketing from './EmailMarketing';
import ExperienceWidget from './ExperienceWidget';
import EmailPerformance from './EmailPerformance';

const EmailDashboard = () => {

    return (
        <React.Fragment>
            <BreadCrumb title='Historical Data' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-2">
                {/* <Widgets /> */}
                <EmailData />
                {/* <EmailMarketing />
                <ExperienceWidget />
                <EmailPerformance /> */}
            </div>
        </React.Fragment>
    );
};

export default EmailDashboard;
