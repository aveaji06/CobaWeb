import React, {useState} from 'react';
import { BarChart, CalendarRange, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';
import { SalesRevenueOverviewChart } from './Charts';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";
import GIF from "../../../assets/images/feeder.gif";
import mqtt from 'mqtt';
const SalesRevenue = () => {
    const [value, setValue] = useState(50); // Initial value

    const handleChange = (event: any ) => {
        setValue(event.target.value);
    };
    const handleFeedNow = () => {
        const client  = mqtt.connect('mqtt://localhost');

        client.on('connect', function () {
            client.publish('test', 'hello world', function (err: any) {
                if (!err) {
                    console.log("Message published successfully");
                }
                client.end();
            });
        });
    };
    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-8 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex flex-col gap-4 mb-4 md:mb-3 md:items-center md:flex-row">
                        <h6 className="grow text-15">Automatic Chicken Farm Overview</h6>
                        <div className="relative">
                            <CalendarRange
                                className="absolute size-4 ltr:left-3 rtl:right-3 top-3 text-slate-500 dark:text-zink-200"></CalendarRange>
                            <Flatpickr
                                className="ltr:pl-10 rtl:pr-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                options={{
                                    dateFormat: "d M, Y",
                                    mode: "range",
                                }}
                                placeholder='Select Date'
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mb-3">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex items-center justify-center size-12 rounded-md text-sky-500 bg-sky-50 shrink-0 dark:bg-sky-500/10">
                                    <BarChart/>
                                </div>
                                <div className="grow">
                                    <p className="mb-1 text-slate-500 dark:text-zink-200">Total Chickens</p>
                                    <h5 className="text-15">
                                        <CountUp end={15876} className="counter-value"/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex items-center justify-center size-12 text-green-500 rounded-md bg-green-50 shrink-0 dark:bg-green-500/10">
                                    <TrendingUp/>
                                </div>
                                <div className="grow">
                                    <p className="mb-1 text-slate-500 dark:text-zink-200">Total Eggs Collected</p>
                                    <h5 className="text-15">
                                        <CountUp end={5000} className="counter-value"/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-10">
                        <div className='col-span-2'>
                            {/* Progress Bar 1 */}
                            <div className='flex items-center'>
                                <div className="relative mt-4 w-full">
                                    <div className=" w-12/12 bg-slate-200 rounded-full h-3.5  dark:bg-zink-600">
                                        <div className="bg-red-300 h-3.5 rounded-full animate-progress relative"
                                             style={{width: "67%"}}>
                                            <div
                                                className="absolute ltr:right-0 rtl:left-0 inline-block px-2 py-0.5 text-[10px] text-white bg-red-300 rounded -top-6 after:absolute after:border-4 ltr:after:right-1/2 rtl:after:left-1/2 after:-bottom-2 after:border-transparent after:border-t-red-300">
                                                67%
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-red-300 mb-1">Amount of chicken feed</p>
                                </div>

                                <p className="ml-2 text-center text-white bg-red-400 p-2 rounded w-1/4">
                                    <CountUp end={7} className="counter-value"/> Days Left</p>
                            </div>
                            {/* Progress Bar */}
                            <div className='flex items-center'>
                                <div className="relative mt-4 w-full">
                                    <div className=" w-12/12 bg-slate-200 rounded-full h-3.5  dark:bg-zink-600">
                                        <div className="bg-blue-400 h-3.5 rounded-full animate-progress relative"
                                             style={{width: "45%"}}>
                                            <div
                                                className="absolute ltr:right-0 rtl:left-0 inline-block px-2 py-0.5 text-[10px] text-white bg-blue-400 rounded -top-6 after:absolute after:border-4 ltr:after:right-1/2 rtl:after:left-1/2 after:-bottom-2 after:border-transparent after:border-t-blue-400">
                                                45%
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-blue-400 mb-1">Amount of water</p>
                                </div>
                                <p className="ml-2 text-center text-white bg-blue-500 p-2 rounded w-1/4">
                                    <CountUp end={5} className="counter-value"/> Days Left</p>
                            </div>
                            <div className='mt-20'>
                                <label htmlFor="DefaultRange" className="inline-block  text-base font-medium">
                                    Feed the Chickens</label>
                                <div className="flex items-center">

                                    <input type="range" min="1" max="37" value={value} onChange={handleChange}
                                           className="w-full h-2 rounded-md  bg-slate-200 dark:bg-zink-600 slider"
                                           id="DefaultRange"/>
                                    <p className="ml-2 text-center text-white bg-blue-500 p-2 rounded">{value * 7} Grams</p>
                                </div>
                                <div className="mt-4 mx-auto flex justify-center">
                                    <button className="mr-2 border-blue-500 border-2 text-blue-500 rounded p-2">Schedule
                                        it
                                    </button>
                                    <button onClick={handleFeedNow} className="bg-blue-500 text-white rounded p-2">Feed Now</button>
                                </div>
                            </div>

                        </div>
                        <img src={GIF} className={"col-span-1"} alt="Example GIF"
                             style={{maxWidth: '90%', maxHeight: '90%'}} key={Date.now()}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SalesRevenue;
