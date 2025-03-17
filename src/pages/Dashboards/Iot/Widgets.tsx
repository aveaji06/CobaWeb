import React from "react";




import {Scale,LampCeiling,Regex,Vegan, Webhook, Atom,Coins, ListFilter, Thermometer, Droplets} from 'lucide-react';
import CountUp from 'react-countup';
import { Dropdown } from 'Common/Components/Dropdown';
import { PerspectiveChart } from './Charts';
import { Link } from 'react-router-dom';
import ThreeDLoader from "./ThreeLoader";
import GIF from "../../../assets/images/building.gif";
import firebasedata from "../../../hooks/firebase";


const Widgets = () => {
  const latestAmonia = firebasedata();

  return (
    <React.Fragment>
            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}            {/* Add space here */}            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}
            <div
                className="order-1 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-green-100 dark:bg-green-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-green-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-green-200/50 dark:text-green-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div
                        className="flex items-center justify-center size-12 bg-green-500 rounded-md text-15 text-green-50">
                        <Vegan/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={100} className="counter-value"/>
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Total Chicken</p>
                </div>
            </div>


            
            <div
                className="order-2 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-orange-100 dark:bg-orange-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-orange-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-orange-200/50 dark:text-orange-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div
                        className="flex items-center justify-center size-12 bg-orange-500 rounded-md text-15 text-orange-50">
                        <Thermometer/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={25.17} decimals={2} className="counter-value"/>
                        °</h5>
                    <p className="text-slate-500 dark:text-slate-200">Avg Temperature</p>
                </div>
            </div>
            <div
                className="order-3 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-sky-100 dark:bg-sky-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-sky-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-sky-200/50 dark:text-sky-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div className="flex items-center justify-center size-12 rounded-md bg-sky-500 text-15 text-sky-50">
                        <Coins/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp className="counter-value" end={35} duration={3}/>Day / {' '}
                        <CountUp className="counter-value" end={5} duration={3}/>Week
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Latest Chicken Age</p>
                </div>
            </div>
            <div
                className="order-4 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-green-100 dark:bg-green-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-green-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-green-200/50 dark:text-green-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div
                        className="flex items-center justify-center size-12 bg-green-500 rounded-md text-15 text-green-50">
                        <Atom/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={2500} decimals={0} className="counter-value"/> ppm
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Kadar CO2</p>
                </div>
            </div>
            <div
                className="order-5 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-purple-100 dark:bg-purple-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-purple-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-purple-200/50 dark:text-purple-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div
                        className="flex items-center justify-center size-12 bg-purple-500 rounded-md text-15 text-purple-50">
                        <Webhook/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={latestAmonia?.nilai || 0} decimals={2} className="counter-value"/> ppm
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Kadar NH3</p>
                </div>
            </div>



            <div
                className="order-6 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-gray-100 dark:bg-gray-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-Gray-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-gray-200/50 dark:text-gray-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div
                        className="flex items-center justify-center size-12 bg-gray-500 rounded-md text-15 text-gray-50">
                        <Regex/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={2} decimals={2} className="counter-value"/> ug/m³
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Level Debu</p>
                </div>
            </div>
            <div
                className="order-7 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-blue-100 dark:bg-blue-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-blue-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-blue-200/50 dark:text-blue-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div
                        className="flex items-center justify-center size-12 bg-blue-500 rounded-md text-15 text-purple-50">
                        <Droplets/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={70} decimals={2} className="counter-value"/> %
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Kelembaban</p>
                </div>
            </div>
            <div
                className="order- md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-yellow-100 dark:bg-yellow-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-yellow-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-yellow-200/50 dark:text-yellow-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div
                        className="flex items-center justify-center size-12 bg-yellow-500 rounded-md text-15 text-yellow-50">
                        <LampCeiling/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={30} decimals={2} className="counter-value"/> Lux
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Level Cahaya</p>
                </div>
            </div>
            <div
                className="order- md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-pink-100 dark:bg-pink-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-pink-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter
                        className="absolute top-0 size-32 stroke-1 text-pink-200/50 dark:text-pink-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div
                        className="flex items-center justify-center size-12 bg-pink-500 rounded-md text-15 text-purple-50">
                        <Scale/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={10} decimals={2} className="counter-value"/> Kg
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Berat Ayam</p>
                </div>
            </div>
            {/* <div
                className="order- md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-purple-100 dark:bg-purple-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-purple-500/20 relative overflow-hidden">
                <div className="card-body">
                    <Kanban
                        className="absolute top-0 size-32 stroke-1 text-purple-200/50 dark:text-purple-500/20 ltr:-right-10 rtl:-left-10"></Kanban>
                    <div
                        className="flex items-center justify-center size-12 bg-purple-500 rounded-md text-15 text-purple-50">
                        <Donut/>
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={15} decimals={2} className="counter-value"/> Kg
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Sisa Pakan Ayam</p>
                </div>
            </div> */}




            {/* Add space here */}
            <div className="mb-4"></div>  {/* This is an empty div to create space */}


            <div className="order-8 col-span-12 2xl:order-1 card 2xl:row-span-4 2xl:col-span-10">
                <div className="card-body">
                    <div className="items-center gap-2 mb-3">
                        <h6 className="text-15 grow">Hardware Perspective</h6>

                        {/* Image */}
                        <img src={GIF} className={"pl-24"} alt="Example GIF"
                             style={{maxWidth: '80%', maxHeight: '100%'}} key={Date.now()}/>

                        {/* <button
                            className="top-[34rem] left-[40rem] border-custom-300 absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center border-4">
                            <Droplets/>
                        </button>

                        <button
                            className="top-[36rem] left-[32rem] border-green-300 absolute bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center border-4">
                            <BatteryMedium/>
                        </button>

                        <button
                            className="top-[39rem] left-[56rem] border-red-300 absolute bg-red-400 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center border-4">
                            <Thermometer/>
                        </button> */}

                        {/* Progress Bar */}
                        <div className="relative mb-4" style={{top: '-10rem'}}>
                            <div className=" w-1/3 bg-slate-200 rounded-full h-3.5  dark:bg-zink-600">
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

                        {/* Progress Bar */}
                        <div className="relative mb-4" style={{top: '-10rem'}}>
                            <div className=" w-1/3 bg-slate-200 rounded-full h-3.5  dark:bg-zink-600">
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

                        {/* <div className="relative mb-4" style={{top: '-10rem'}}>
                            <div className=" w-1/3 bg-slate-200 rounded-full h-3.5  dark:bg-zink-600">
                                <div className="bg-green-500 h-3.5 rounded-full animate-progress relative"
                                     style={{width: "50%"}}>
                                    <div
                                        className="absolute ltr:right-0 rtl:left-0 inline-block px-2 py-0.5 text-[10px] text-white bg-green-500 rounded -top-6 after:absolute after:border-4 ltr:after:right-1/2 rtl:after:left-1/2 after:-bottom-2 after:border-transparent after:border-t-green-500">
                                        50%
                                    </div>
                                </div>
                            </div>
                            <p className="text-green-500 mb-1">Battery level</p>
                        </div> */}
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
};

export default Widgets;
