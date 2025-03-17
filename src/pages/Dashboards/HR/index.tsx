import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import EmployeePerformance from './EmployeePerformance';
import UpcomingScheduled from './UpcomingScheduled';
import TotalProjects from './TotalProjects';
import UpcomingInterview from './UpcomingInterview';
import RecentPayroll from './RecentPayroll';

const HRDashboard = () => {

    return (
        <React.Fragment>
            <BreadCrumb title='Green Savior' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
                <div className="col-span-12 md:order-1 xl:col-span-8 2xl:col-span-6">
                    <h5 className="mb-2">Welcome to Green Energy from Biogas Chicken Farm Automatic 🎉</h5>
                    <p className="mb-5 text-slate-500 dark:text-zink-200">
                        This platform is dedicated to managing and optimizing the production of green energy from biogas
                        in an automatic chicken farm.
                        <Link to="#!" className="text-red-500"> Learn More</Link>
                    </p>
                </div>
                <div className="col-span-12 md:order-2 xl:col-span-4 2xl:col-start-9 card">
                    <div className="p-4">
                        <div className="grid grid-cols-3">
                            <div
                                className="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0">
                                <h6 className="mb-1 font-bold">
                                    <CountUp end={100} className="counter-value"/> kWh
                                </h6>
                                <p className="text-slate-500 dark:text-zink-200"> Generated</p>
                            </div>
                            <div
                                className="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0">
                                <h6 className="mb-1 font-bold">
                                    <CountUp end={50} className="counter-value"/>%
                                </h6>
                                <p className="text-slate-500 dark:text-zink-200"> Reduction in Carbon Footprint</p>
                            </div>
                            <div
                                className="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0">
                                <h6 className="mb-1 font-bold">
                                    <CountUp end={20} className="counter-value"/> Kg
                                </h6>
                                <p className="text-slate-500 dark:text-zink-200"> of Biogas Produced</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Widgets/>
                <EmployeePerformance/>
                <UpcomingScheduled/>
                <TotalProjects/>
                <RecentPayroll/>

            </div>
        </React.Fragment>
    );
};

export default HRDashboard;
