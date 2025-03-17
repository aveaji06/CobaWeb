import React, { useMemo, useState } from 'react';
import TableContainer from 'Common/TableContainer';
import { Search } from 'lucide-react';
import { EnvironmentPerformanceData } from "Common/data/mailbox"; // Assume this is the updated data source
import filterDataBySearch from 'Common/filterDataBySearch';

const EnvironmentPerformance = () => {

    const [data, setData] = useState(EnvironmentPerformanceData);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['application', 'currentConditions', 'optimalConditions', 'purpose', 'lastUpdated']; // Keys to search in the table
        filterDataBySearch(EnvironmentPerformanceData, search, keysToSearch, setData);
    };

    const columns = useMemo(() => [
        {
            header: "Application Context",
            accessorKey: "application",
            enableColumnFilter: false,
        },
        {
            header: "Optimal Conditions",
            accessorKey: "optimalConditions",
            enableColumnFilter: false,
        },
        {
            header: "Purpose",
            accessorKey: "purpose",
            enableColumnFilter: false,
        },
        {
            header: "Last Updated",
            accessorKey: "lastUpdated",
            enableColumnFilter: false,
        },
        {
            header: "Action", // Empty header for the button
            enableColumnFilter: false,
            cell: (cell: any) => (
                <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                    Apply this ML
                </button>
            ),
        },
    ], []);

    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="grid items-center grid-cols-1 gap-3 mb-5 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <h6 className="text-15">Environment Performance Machine Learning</h6>
                        </div>
                        <div className="xl:col-span-3 xl:col-start-10">
                            <div className="flex gap-3">
                                <div className="relative grow">
                                    <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                    <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"></Search>
                                </div>
                                <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><i className="align-baseline ltr:pr-1 rtl:pl-1 ri-download-2-line"></i> Export</button>
                            </div>
                        </div>
                    </div>

                    <TableContainer
                        isPagination={true}
                        columns={(columns || [])}
                        data={(data || [])}
                        customPageSize={11}
                        divclassName="-mx-5 overflow-x-auto"
                        tableclassName="w-full whitespace-nowrap"
                        theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                        thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500"
                        tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default EnvironmentPerformance;
