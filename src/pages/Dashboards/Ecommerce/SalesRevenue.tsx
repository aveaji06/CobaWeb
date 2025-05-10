import React, { useState } from 'react';
import { BarChart, CalendarRange, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';
import { SalesRevenueOverviewChart } from './Charts';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";
import GIF from "../../../assets/images/feeder.gif";
import mqtt from 'mqtt';
import { database } from "config/config";
import { ref, set } from 'firebase/database'; // Mengimpor set() untuk menulis data ke Firebase

const SalesRevenue = () => {
    // Deklarasi state
    const [fanStatus, setFanStatus] = useState(false); // Status kipas: hidup/mati
    const [fanDirection, setFanDirection] = useState("Left"); // Arah kipas: Kiri/Kanan
    const [fanSpeed, setFanSpeed] = useState(0); // Kecepatan kipas: 0 - 100
    const [isConfirmed, setIsConfirmed] = useState(false); // Menyimpan status konfirmasi
    const [value, setValue] = useState(50); // Initial value for slider

    // Fungsi untuk mengirim data ke Firebase di path 'coba/fan'
    const sendDataToFirebase = () => {
        const fanData = {
            status: fanStatus ? "ON" : "OFF",
            direction: fanDirection,
            speed: fanSpeed,
        };
        // Mengirim data ke path 'coba/fan' di Firebase jika sudah dikonfirmasi
        if (isConfirmed) {
            set(ref(database, "coba/fan"), fanData);
        }
    };

    // Mengirim data ke Firebase ketika tombol confirm diklik
    const handleConfirm = () => {
        setIsConfirmed(true);
        sendDataToFirebase();
    };

    // Fungsi untuk menangani perubahan slider
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    // Fungsi untuk feed now menggunakan MQTT
    const handleFeedNow = () => {
        const client = mqtt.connect('mqtt://localhost');
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
            {/* Chicken Feeder Section */}
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
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
                    <div className="grid grid-cols-3 mt-10">
                        <div className='col-span-2'>
                            <div className='mt-0'>
                                <label htmlFor="DefaultRange" className="inline-block  text-base font-medium">
                                    Feed the Chickens
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type="range"
                                        min="1"
                                        max="37"
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full h-2 rounded-md  bg-slate-200 dark:bg-zink-600 slider"
                                        id="DefaultRange"
                                    />
                                    <p className="ml-2 text-center text-white bg-blue-500 p-2 rounded">
                                        {value * 7} Grams
                                    </p>
                                </div>
                                <div className="mt-4 mx-auto flex justify-center">
                                    <button className="mr-2 border-blue-500 border-2 text-blue-500 rounded p-2">Schedule it</button>
                                    <button onClick={handleFeedNow} className="bg-blue-500 text-white rounded p-2">Feed Now</button>
                                </div>
                            </div>
                        </div>
                        <img src={GIF} className={"col-span-1"} alt="Example GIF" style={{ maxWidth: '90%', maxHeight: '90%' }} key={Date.now()} />
                    </div>
                </div>
            </div>

            {/* FAN CONTROL */}
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                     <div className="flex flex-col items-center">
                         <h2 className="text-xl font-medium mb-4">Fan Control</h2>
                          {/* Control for Fan Status */}
                         <div className="flex flex-col items-center mb-6">
                             <label htmlFor="fanStatus" className="inline-block text-base font-medium mb-2">Fan Status</label>
                             <button
                                onClick={() => setFanStatus(!fanStatus)}
                                className={`btn-toggle ${fanStatus ? "bg-green-500" : "bg-red-500"}`}
                                >
                                {fanStatus ? "On" : "Off"}
                            </button>
                        </div>

                        {/* Control for Fan Direction */}
                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanDirection" className="inline-block text-base font-medium mb-2">Fan Direction</label>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setFanDirection("Left")}
                                    className={`btn-toggle ${fanDirection === "Left" ? "bg-blue-500" : "bg-gray-300"}`}
                                >
                                    Kiri
                                </button>
                                <button
                                    onClick={() => setFanDirection("Right")}
                                    className={`btn-toggle ${fanDirection === "Right" ? "bg-blue-500" : "bg-gray-300"}`}
                                >
                                    Kanan
                                </button>
                            </div>
                        </div>

                        {/* Control for Fan Speed */}
                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanSpeed" className="inline-block text-base font-medium mb-2">Speed</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={fanSpeed}
                                    onChange={(e) => setFanSpeed(Number(e.target.value))}
                                    style={{ width: "80%" }}
                                    className="slider"
                                />
                                <span className="text-base">{fanSpeed}%</span>
                            </div>
                        </div>

                        {/* Confirm Button to Send Data */}
                        <div className="flex justify-center">
                            <button
                                onClick={handleConfirm}
                                className="bg-blue-500 text-white p-3 rounded-md"
                            >
                                Confirm and Send Data
                            </button>
                        </div>
                    </div>
                </div>
            </div>








            {/* FAN CONTROL 2 */}
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                     <div className="flex flex-col items-center">
                         <h2 className="text-xl font-medium mb-4">Fan Control 2</h2>
                          {/* Control for Fan Status */}
                         <div className="flex flex-col items-center mb-6">
                             <label htmlFor="fanStatus" className="inline-block text-base font-medium mb-2">Fan Status 2</label>
                             <button
                                onClick={() => setFanStatus(!fanStatus)}
                                className={`btn-toggle ${fanStatus ? "bg-green-500" : "bg-red-500"}`}
                                >
                                {fanStatus ? "On" : "Off"}
                            </button>
                        </div>

                        {/* Control for Fan Direction */}
                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanDirection" className="inline-block text-base font-medium mb-2">Fan Direction 2</label>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setFanDirection("Left")}
                                    className={`btn-toggle ${fanDirection === "Left" ? "bg-blue-500" : "bg-gray-300"}`}
                                >
                                    Kiri
                                </button>
                                <button
                                    onClick={() => setFanDirection("Right")}
                                    className={`btn-toggle ${fanDirection === "Right" ? "bg-blue-500" : "bg-gray-300"}`}
                                >
                                    Kanan
                                </button>
                            </div>
                        </div>

                        {/* Control for Fan Speed */}
                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanSpeed" className="inline-block text-base font-medium mb-2">Speed</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={fanSpeed}
                                    onChange={(e) => setFanSpeed(Number(e.target.value))}
                                    style={{ width: "80%" }}
                                    className="slider"
                                />
                                <span className="text-base">{fanSpeed}%</span>
                            </div>
                        </div>

                        {/* Confirm Button to Send Data */}
                        <div className="flex justify-center">
                            <button
                                onClick={handleConfirm}
                                className="bg-blue-500 text-white p-3 rounded-md"
                            >
                                Confirm and Send Data
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    );
};

export default SalesRevenue;
