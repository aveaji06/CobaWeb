import React from "react";
import { Dropdown } from "Common/Components/Dropdown";

// Image
import logoLight from "assets/images/logo-light.png";
import logoDark from "assets/images/logo-dark.png";
import image1 from "assets/images/auth/img-01.png";
import us from "assets/images/flags/us.svg";
import es from "assets/images/flags/es.svg";
import de from "assets/images/flags/de.svg";
import fr from "assets/images/flags/fr.svg";
import jp from "assets/images/flags/jp.svg";
import it from "assets/images/flags/it.svg";
import ru from "assets/images/flags/ru.svg";
import ae from "assets/images/flags/ae.svg";
import { Link } from "react-router-dom";

const ResetPasswordBoxed = () => {

    document.title = "Sign In | Bimoo - React ";

    return (
        <React.Fragment>
            <div className="flex items-center justify-center min-h-screen px-4 py-16 bg-cover bg-auth-pattern dark:bg-auth-pattern-dark dark:text-zink-100 font-public">
                <div className="mb-0 border-none shadow-none xl:w-2/3 card bg-white/70 dark:bg-zink-500/70">
                    <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <div className="!px-12 !py-12 card-body h-full flex flex-col">

                                <div className="my-auto">
                                    <div className="text-center">
                                        <h4 className="mb-2 text-custom-500 dark:text-custom-500">Forgot Password?</h4>
                                        <p className="mb-8 text-slate-500 dark:text-zink-200">Reset your Bimoo password</p>
                                    </div>

                                    <div className="px-4 py-3 mb-6 text-sm text-yellow-500 border border-transparent rounded-md bg-yellow-50 dark:bg-yellow-400/20">
                                        Provide your email address, and instructions will be sent to you
                                    </div>

                                    <form autoComplete="off" action="/">
                                        <div>
                                            <label htmlFor="emailInput" className="inline-block mb-2 text-base font-medium">Email</label>
                                            <input type="text" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required placeholder="Enter email" id="emailInput" />
                                        </div>
                                        <div className="mt-8">
                                            <button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Send Reset Link</button>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="mb-0">Wait, I remember my password... <Link to="/auth-login-boxed" className="underline fw-medium text-custom-500"> Click here </Link> </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mx-2 mt-2 mb-2 border-none shadow-none lg:col-span-7 card bg-white/60 dark:bg-zink-500/60">
                            <div className="!px-10 !pt-10 h-full !pb-0 card-body flex flex-col">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="grow">
                                        <Link to="/">
                                            <img src={logoLight} alt="" className="hidden h-24 dark:block" />
                                            <img src={logoDark} alt="" className="block h-24 dark:hidden" />
                                        </Link>
                                    </div>
                                    <div className="shrink-0">
                                        <Dropdown className="relative text-end">
                                            <Dropdown.Trigger type="button" className="inline-flex items-center gap-3 transition-all duration-200 ease-linear dropdown-toggle btn border-slate-200 dark:border-zink-400/60 group/items focus:border-custom-500 dark:focus:border-custom-500" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                <img src={us} alt="" className="object-cover h-5 rounded-full" />
                                                <h6 className="text-base font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">English</h6>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content placement="right-end" className="absolute z-50 p-3 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[9rem] flex flex-col gap-3 dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={us} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">English</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={es} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Spanish</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={de} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">German</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={fr} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">French</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={jp} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Japanese</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={it} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Italian</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={ru} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Russian</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={ae} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Arabic</h6>
                                                </a>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <img src={image1} alt="" className="md:max-w-[32rem] mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ResetPasswordBoxed;
