import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
// import LocationBased from './grafik';
// import Interaction from './Interaction';
// import UserDevice from './UserDevice';
// import Satisfaction from './Satisfaction';
// import DailyVisit from './DailyVisit';
// import Reports from './Reports';
// import MonthlyCampaign from './MonthlyCampaign';
// import Subscription from './Subscription';
// import TrafficSource from './TrafficSource';
// import ProductsStatistics from './ProductsStatistics';

const Analytics = () => {

  return (
    <React.Fragment>
      <BreadCrumb title='Dashboard' pageTitle='Dashboards' />
      <div className="grid grid-cols-12 gap-x-5">
        {/* Empty rows for spacing */}
        <div className="mb-200"></div>
        <div className="mb-200"></div>
        <div className="mb-200"></div>
        <div className="mb-200"></div>
        <div className="mb-200"></div>
        <div className="mb-200"></div>
        <div className="mb-200"></div>
        <div className="mb-200"></div>
        <div className="mb-200"></div>
        <div className="mb-200"></div>

        {/* Main Content */}
        <Widgets />

        {/* Uncomment below sections if you need to include them */}
        {/* <LocationBased /> */}
        {/* <Interaction /> */}
        {/* <UserDevice /> */}
        {/* <Satisfaction /> */}
        {/* <DailyVisit /> */}
        {/* <ProductsStatistics /> */}
        {/* <Reports /> */}
        {/* <MonthlyCampaign /> */}
        {/* <Subscription /> */}
        {/* <TrafficSource /> */}
      </div>
    </React.Fragment>
  );
};


export default Analytics;
