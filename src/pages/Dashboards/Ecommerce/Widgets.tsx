import React from 'react';
import { Package, PackageX, Truck, Wallet2 } from 'lucide-react';
import CountUp from 'react-countup';

const Widgets = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 2xl:row-span-1">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                        <Wallet2 />
                    </div>
                    <h5 className="mt-4 mb-2">
                        <CountUp end={1500} className="counter-value" />
                    </h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Number of Chickens</p>
                </div>
            </div>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 2xl:row-span-1">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">
                        <Package />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={5000} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Eggs Collected</p>
                </div>
            </div>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2  2xl:row-span-1">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-green-500 bg-green-100 rounded-full size-14 dark:bg-green-500/20">
                        <Truck />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={200} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Feed Consumed (kg)</p>
                </div>
            </div>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2  2xl:row-span-1">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-red-500 bg-red-100 rounded-full size-14 dark:bg-red-500/20">
                        <PackageX />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={1000} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Water Consumed (liters)</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets;
