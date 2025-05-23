import React from "react";

// Images
import company from "assets/images/small/img-3.jpg";

import { RecentBiogasData } from "Common/data/invoice"; // Assuming you'll create this data structure

// Icons
import { MoveUpRight, MoveDownLeft, MoreVertical } from 'lucide-react';

// SimpleBar
import SimpleBar from 'simplebar-react';
import { Dropdown } from "Common/Components/Dropdown";
import { Link } from "react-router-dom";

const RecentBiogas = () => {

    const Status = ({ item }: any) => {
        switch (item) {
            case "Operational":
                return (<span className="px-2.5 py-0.5 inline-block text-[11px] font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">{item}</span>);
            case "Under Maintenance":
                return (<span className="px-2.5 py-0.5 inline-block text-[11px] font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">{item}</span>);
            case "Error":
                return (<span className="px-2.5 py-0.5 inline-block text-[11px] font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">{item}</span>);
            default:
                return (<span className="px-2.5 py-0.5 inline-block text-[11px] font-medium rounded border bg-gray-100 border-transparent text-gray-500 dark:bg-gray-500/20 dark:border-transparent">{item}</span>);
        }
    };

    return (
        <React.Fragment>
            <div className="col-span-12 md:order-12 lg:col-span-12 xl:col-span-8 2xl:col-span-3">
                <div className="grid grid-cols-12 gap-x-5">
                    <div className="relative col-span-12 card bg-gradient-to-r to-custom-100 dark:to-custom-500/20 from-transparent">
                        <div className="bg-[url('../images/hr-dashboard.png')] absolute inset-0 bg-cover opacity-30"></div>
                        <div className="relative card-body">
                            <div className="flex gap-3 mb-4">
                                <div className="size-10 bg-purple-100 rounded-full dark:bg-purple-500/20 shrink-0">
                                    <img src={company} alt="" className="h-10 rounded-full" />
                                </div>
                                <div className="grow">
                                    <h6 className="mb-1">Biogas System Overview</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Latest Input and Output Data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 card">
                        <div className="!pb-0 card-body">
                            <div className="flex items-center gap-2 mb-3">
                                <h6 className="text-15 grow">Recent Biogas Data</h6>
                                <Dropdown className="relative dropdown shrink-0">
                                    <Dropdown.Trigger type="button" className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle" id="userDeviceDropdown" data-bs-toggle="dropdown">
                                        <MoreVertical className="inline-block size-4" />
                                    </Dropdown.Trigger>

                                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="userDeviceDropdown">
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Today</Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Yesterday</Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Last Week</Link>
                                        </li>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="pb-5">
                            <SimpleBar className="flex flex-col h-[198px] gap-4 px-5">
                                <div className="flex flex-col gap-3">
                                    {(RecentBiogasData || []).map((item: any, key: number) => (
                                        <div className="flex flex-wrap items-center gap-3" key={key}>
                                            {item.type === "input" ?
                                                <div className="flex items-center justify-center size-6 text-blue-500 rounded-full shrink-0">
                                                    <MoveDownLeft className="size-4" />
                                                </div> :
                                                <div className="flex items-center justify-center size-6 text-green-500 rounded-full shrink-0">
                                                    <MoveUpRight className="size-4" />
                                                </div>}
                                            <div className="grow">
                                                <h6 className="mb-0">{item.name}</h6>
                                                <p className="text-slate-400">{item.description}</p>
                                            </div>
                                            <div className="shrink-0">
                                                <h6>{item.amount}</h6>
                                            </div>
                                            <div className="w-20 ltr:text-right rtl:text-left shrink-0">
                                                <Status item={item.status} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SimpleBar>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RecentBiogas;
