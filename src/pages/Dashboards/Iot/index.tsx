import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import VideoPlayer from './Video'

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
        <Widgets />
        <VideoPlayer />

      </div>
    </React.Fragment>
  );
};


export default Analytics;
