import React from "react";

const HoverAbleStripedRows = () => {
    return (
        <React.Fragment>

            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Hoverable Rows</h6>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="ltr:text-left rtl:text-right ">
                                <tr>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Order ID</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Shop</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Customer</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Price</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="transition-all duration-300 ease-linear hover:bg-slate-50 dark:hover:bg-zink-600">
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#541254265</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Amezon</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Cleo Carson</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">$4,521</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="transition-all duration-300 ease-linear hover:bg-slate-50 dark:hover:bg-zink-600">
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#744145235</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Shoppers</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Juston Eichmann</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">$7,546</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="transition-all duration-300 ease-linear hover:bg-slate-50 dark:hover:bg-zink-600">
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#9855126598</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Flipkart</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Bettie Johson</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">$1,350</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="transition-all duration-300 ease-linear hover:bg-slate-50 dark:hover:bg-zink-600">
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#847512653</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Bimoo</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Maritza Blanda</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">$4,521</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Hoverable Striped Rows</h6>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="ltr:text-left rtl:text-right ">
                                <tr>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Order ID</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Shop</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Customer</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Price</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="even:bg-slate-50 hover:bg-slate-50 even:hover:bg-slate-100 dark:even:bg-zink-600/50 dark:hover:bg-zink-600 dark:even:hover:bg-zink-600">
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#541254265</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Amezon</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Cleo Carson</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">$4,521</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="even:bg-slate-50 hover:bg-slate-50 even:hover:bg-slate-100 dark:even:bg-zink-600/50 dark:hover:bg-zink-600 dark:even:hover:bg-zink-600">
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#744145235</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Shoppers</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Juston Eichmann</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">$7,546</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="even:bg-slate-50 hover:bg-slate-50 even:hover:bg-slate-100 dark:even:bg-zink-600/50 dark:hover:bg-zink-600 dark:even:hover:bg-zink-600">
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#9855126598</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Flipkart</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Bettie Johson</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">$1,350</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="even:bg-slate-50 hover:bg-slate-50 even:hover:bg-slate-100 dark:even:bg-zink-600/50 dark:hover:bg-zink-600 dark:even:hover:bg-zink-600">
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#847512653</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Bimoo</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">Maritza Blanda</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">$4,521</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HoverAbleStripedRows;
