import React from 'react';
import { Link } from 'react-router-dom';
import { FeedDistributionChart } from './Charts'; // Update the chart component to show feed distribution
import CountUp from 'react-countup';
import { MoveRight, TrendingDown } from 'lucide-react';

const FarmOverview = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 2xl:col-span-4 2xl:row-span-2">
                <div className="grid grid-cols-12 gap-x-5">
                    <div className="col-span-12 card lg:col-span-6 2xl:col-span-12">
                        <div className="card-body">
                            <div className="flex items-center mb-3">
                                <h6 className="grow text-15">Feed Distribution Overview</h6>
                                <div className="relative">
                                    <Link to="#" className="transition-all duration-300 ease-linear text-custom-500 hover:text-custom-700">View Details
                                        <MoveRight className="inline-block size-4 align-middle ltr:ml-2 rtl:mr-2"></MoveRight></Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 md:col-span-6 2xl:col-span-7">
                                    <FeedDistributionChart chartId="feedDistributionChart" />
                                </div>
                                <div className="col-span-12 md:col-span-6 2xl:col-span-5">
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex items-center gap-2">
                                            <div className="size-3 bg-green-500 shrink-0 clip-triangle"></div>
                                            <p className="text-green-500">Corn Feed (40%)</p>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="size-3 bg-purple-500 shrink-0 clip-triangle"></div>
                                            <p className="text-purple-500">Soy Feed (35%)</p>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="size-3 bg-sky-500 shrink-0 clip-triangle"></div>
                                            <p className="text-sky-500">Mixed Grains (25%)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 card lg:col-span-6 2xl:col-span-12">
                        <div className="card-body">
                            <div className="flex items-center mb-2">
                                <h5 className="grow"><CountUp end={1250} className="counter-value" /></h5> {/* This could represent the current feed consumption in kilograms */}
                                <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-red-100 text-red-500 dark:bg-zinc-700 dark:border-red-900">
                                    <TrendingDown className="inline-block size-3 ltr:mr-1 rtl:ml-1"></TrendingDown> 4.5%</span>
                            </div>
                            <h6 className="mb-0">Monthly Feed Consumption Goal (2000 kg)</h6>
                            <div>
                                <div className="flex items-center justify-between mt-5 mb-2">
                                    <p className="text-slate-500 dark:text-zinc-200">Current Consumption</p>
                                    <h6 className="mb-0 text-custom-500">62.5%</h6>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2.54 dark:bg-zinc-600">
                                    <div className="bg-custom-500 h-2.5 rounded-full" style={{ width: "62.5%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FarmOverview;
