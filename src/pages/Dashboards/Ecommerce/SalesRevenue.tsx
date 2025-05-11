import React, { useState, useEffect } from 'react'; // Menambahkan useEffect
import { BarChart, CalendarRange, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';
import { SalesRevenueOverviewChart } from './Charts';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";
import GIF from "../../../assets/images/feeder.gif";
import mqtt from 'mqtt';
import { database } from "config/config";
import { ref, set, onValue } from 'firebase/database'; // Menggunakan onValue untuk Firebase

const SalesRevenue = () => {
    // Deklarasi state
    const [fanStatus, setFanStatus] = useState(false); 
    const [fanDirection, setFanDirection] = useState("Left");
    const [fanSpeed, setFanSpeed] = useState(0); 
    const [isConfirmed, setIsConfirmed] = useState(false);
    
    const [fanStatus2, setFanStatus2] = useState(false); 
    const [fanDirection2, setFanDirection2] = useState("Left");
    const [fanSpeed2, setFanSpeed2] = useState(0); 
    const [isConfirmed2, setIsConfirmed2] = useState(false);



    const [heaterStatus, setHeaterStatus] = useState(false); // Correct state declaration for heaterStatus
    const [heaterLevel, setHeaterLevel] = useState(0); // Correct state declaration for heaterLevel
    const [isConfirmed3, setIsConfirmed3] = useState(false);

    const [value, setValue] = useState(50);
    const [feedSchedule, setFeedSchedule] = useState<Date | null>(null);
    const [feedAmount, setFeedAmount] = useState(0);
    const [isConfirmed1, setIsConfirmed1] = useState(false);

    const [upcomingSchedules, setUpcomingSchedules] = useState<any[]>([]); // State for storing upcoming schedules

    // Function to fetch and filter upcoming schedules from Firebase
    const fetchUpcomingSchedules = () => {
        const schedulesRef = ref(database, 'coba/pakan');
        onValue(schedulesRef, snapshot => {
            const schedulesData = snapshot.val();
            if (schedulesData) {
                const currentDate = new Date(); // Current date and time
                const filteredSchedules = Object.keys(schedulesData).filter((key) => {
                    // Convert key to Date object for comparison
                    const scheduleDate = new Date(
                        `${key.slice(0, 4)}-${key.slice(4, 6)}-${key.slice(6, 8)}T${key.slice(9, 11)}:${key.slice(11, 13)}:00`
                    );
                    // Filter schedules that are today or in the future
                    return scheduleDate >= currentDate;
                });

                // Get the filtered schedules and map them to an array
                const schedules = filteredSchedules.map((key) => ({
                    date: key, // Date key in format YYYYMMDD_HHmm
                    amount: schedulesData[key], // Amount of feed
                }));

                // Set the upcoming schedules
                setUpcomingSchedules(schedules);
            }
        });
    };

    // Fetch data on mount
    useEffect(() => {
        fetchUpcomingSchedules(); // Fetch the upcoming schedules from Firebase
    }, []);










    // Handle Feed Schedule Change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
        setFeedAmount(Number(event.target.value) * 7); // Calculate feed amount in grams
    };

    // Handle Date and Time Selection
    const handleSchedule = (selectedDates: Date[]) => {
        setFeedSchedule(selectedDates[0]); // Set the first selected date
    };

    // Format date to "YYYYMMDD_HHmm"
    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${year}${month}${day}_${hours}${minutes}`;
    };

    // Confirm and Send Feed Schedule to Firebase
    const handleConfirmFeed = () => {
        if (feedSchedule) {
            const formattedDate = formatDate(feedSchedule); // Get formatted date

            // Use set to save the data under the key with formatted date
            const feedRef = ref(database, `coba/pakan/${formattedDate}`);
            set(feedRef, feedAmount); // Save the amount of feed with the formatted date as key

            setIsConfirmed1(true);
             // Hide the confirmation message and reset after 3 seconds
            setTimeout(() => {
                setIsConfirmed1(false); // Hide message after 3 seconds
                setFeedSchedule(null);  // Reset the feed schedule
                setValue(50);  // Reset the feed amount slider to default value
            }, 3000);
        } else {
            alert("Please select a schedule.");
        }
    };






























    

    
    // Ambil data dari Firebase ketika komponen dimuat
    useEffect(() => {
        const fanRef = ref(database, 'coba/fan'); // Path data kipas
        onValue(fanRef, snapshot => {  // Menggunakan onValue untuk mendengarkan data
            const fanData = snapshot.val(); // Mengambil data dari Firebase
            if (fanData) {
                setFanStatus(fanData.status === 'ON');
                setFanDirection(fanData.direction);
                setFanSpeed(fanData.speed);
            }
        });
    }, []);

    // Fungsi untuk mengirim data ke Firebase setelah konfirmasi
    const sendDataToFirebase = () => {
        const fanData = {
            status: fanStatus ? "ON" : "OFF",
            direction: fanDirection,
            speed: fanSpeed,
        };
        set(ref(database, "coba/fan"), fanData); // Mengirim data ke Firebase
    };

    // Fungsi untuk menangani perubahan status kipas
    const toggleFanStatus = () => {
        // Jika status kipas berubah ke OFF, set speed ke 0
        setFanStatus(!fanStatus);
        if (fanStatus) {
            setFanSpeed(0); // Set kecepatan kipas menjadi 0 jika kipas dimatikan
        }
        if (!fanStatus) {
            setFanSpeed(50); // Set kecepatan kipas menjadi 0 jika kipas dimatikan
        }
    };

    // Fungsi untuk menangani perubahan arah kipas
    const changeFanDirection = (direction: string) => { // Mendefinisikan tipe parameter direction
        setFanDirection(direction);
    };

    // Fungsi untuk menangani perubahan kecepatan kipas
    const changeFanSpeed = (event: React.ChangeEvent<HTMLInputElement>) => { // Mendefinisikan tipe parameter event
        setFanSpeed(Number(event.target.value)); // Mengubah kecepatan kipas
    };

    // Fungsi untuk mengonfirmasi perubahan dan mengirimkan data ke Firebase
    const handleConfirm = () => {
        setIsConfirmed(true); 
        sendDataToFirebase(); // Kirim data setelah konfirmasi
    };


// Ambil data dari Firebase ketika komponen dimuat
    useEffect(() => {
        const fanRef = ref(database, 'coba/fan2'); // Path data kipas
        onValue(fanRef, snapshot => {  // Menggunakan onValue untuk mendengarkan data
            const fanData2 = snapshot.val(); // Mengambil data dari Firebase
            if (fanData2) {
                setFanStatus(fanData2.status2 === 'ON');
                setFanDirection(fanData2.direction2);
                setFanSpeed(fanData2.speed2);
            }
        });
    }, []);


    // Fungsi untuk menangani perubahan status kipas
    const toggleFanStatus2 = () => {
        // Jika status kipas berubah ke OFF, set speed ke 0
        setFanStatus2(!fanStatus2);
        if (fanStatus2) {
            setFanSpeed2(0); // Set kecepatan kipas menjadi 0 jika kipas dimatikan
        }
        if (!fanStatus2) {
            setFanSpeed2(50); // Set kecepatan kipas menjadi 0 jika kipas dimatikan
        }
    };

    // Fungsi untuk mengirim data ke Firebase setelah konfirmasi
    const sendDataToFirebase2 = () => {
        const fanData2 = {
            status2: fanStatus2 ? "ON" : "OFF",
            direction2: fanDirection2,
            speed2: fanSpeed2,
        };
        set(ref(database, "coba/fan2"), fanData2); // Mengirim data ke Firebase
    };

    // Fungsi untuk menangani perubahan arah kipas
    const changeFanDirection2 = (direction2: string) => { // Mendefinisikan tipe parameter direction
        setFanDirection2(direction2);
    };

    // Fungsi untuk menangani perubahan kecepatan kipas
    const changeFanSpeed2 = (event: React.ChangeEvent<HTMLInputElement>) => { // Mendefinisikan tipe parameter event
        setFanSpeed2(Number(event.target.value)); // Mengubah kecepatan kipas
    };

    // Fungsi untuk mengonfirmasi perubahan dan mengirimkan data ke Firebase
    const handleConfirm2 = () => {
        setIsConfirmed2(true); 
        sendDataToFirebase2(); // Kirim data setelah konfirmasi
    };










    // Fetch data from Firebase when the component is mounted
    useEffect(() => {
        const heaterRef = ref(database, 'coba/heater'); // Path to heater data
        onValue(heaterRef, snapshot => { // Using onValue to listen for data
            const heaterData = snapshot.val(); // Get the data from Firebase
            if (heaterData) {
                setHeaterStatus(heaterData.status === 'ON');
                setHeaterLevel(heaterData.level);
            }
        });
    }, []);

    // Function to send data to Firebase after confirmation
    const sendDataToFirebase3 = () => {
        const heaterData = {
            status: heaterStatus ? "ON" : "OFF",
            level: heaterLevel,
        };
        set(ref(database, "coba/heater"), heaterData); // Send data to Firebase
    };

    // Function to handle status toggle of the heater
    const toggleHeaterStatus = () => {
        setHeaterStatus(!heaterStatus);
        if (!heaterStatus) {
            setHeaterLevel(100); // Set heater level to 50 when turned on
        } else {
            setHeaterLevel(0); // Set heater level to 0 when turned off
        }
    };

    // Function to handle change in heater level
    const changeHeaterLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeaterLevel(Number(event.target.value)); // Update the heater level
    };

    // Function to confirm the changes and send data to Firebase
    const handleConfirm3 = () => {
        setIsConfirmed3(true); 
        sendDataToFirebase3(); // Send data to Firebase after confirmation
    };





















    return (
        <React.Fragment>
             {/* Upcoming Schedules Section */}
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                    <h6 className="text-15 mb-4">Upcoming Feed Schedules</h6>
                    <div>
                        {upcomingSchedules.length > 0 ? (
                            upcomingSchedules.map((schedule, index) => (
                                <div key={index} className="bg-gray-100 p-4 mb-4 rounded-md">
                                    <p><strong>Scheduled for:</strong> {schedule.date}</p>
                                    <p><strong>Feed Amount:</strong> {schedule.amount} Grams</p>
                                </div>
                            ))
                        ) : (
                            <p>No upcoming schedules.</p>
                        )}
                    </div>
                </div>
            </div>






            {/* Chicken Feeder Section */}
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex flex-col gap-4 mb-4 md:mb-3 md:items-center md:flex-row">
                        <h6 className="grow text-15">Automatic Chicken Farm Overview</h6>
                        <div className="relative">
                            <CalendarRange className="absolute size-4 ltr:left-3 rtl:right-3 top-3 text-slate-500 dark:text-zink-200" />
                            <Flatpickr
                                className="ltr:pl-10 rtl:pr-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                options={{
                                    dateFormat: "d M, Y H:i",
                                    enableTime: true,
                                }}
                                onChange={handleSchedule} // Update schedule
                                placeholder="Select Date and Time"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-10">
                        <div className="col-span-2">
                            <div className="mt-0">
                                <label htmlFor="DefaultRange" className="inline-block text-base font-medium">Feed the Chickens</label>
                                <div className="flex items-center">
                                    <input
                                        type="range"
                                        min="1"
                                        max="37"
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full h-2 rounded-md bg-slate-200 dark:bg-zink-600 slider"
                                        id="DefaultRange"
                                    />
                                    <p className="ml-2 text-center text-white bg-blue-500 p-2 rounded">{feedAmount} Grams</p>
                                </div>
                                <div className="mt-4 mx-auto flex justify-center">
                                    <button className="mr-2 border-blue-500 border-2 text-blue-500 rounded p-2">Schedule it</button>
                                    <button onClick={handleConfirmFeed} className="bg-blue-500 text-white rounded p-2">Confirm and Send</button>
                                </div>
                                {feedSchedule && !isConfirmed1 && (
                                    <div className="mt-4 text-center">
                                        <p>Scheduled for: {feedSchedule.toLocaleString()}</p>
                                    </div>
                                )}
                                {isConfirmed1 && (
                                    <div className="mt-4 text-center text-green-500">
                                        <p>Feed scheduled and data sent to Firebase!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <img src={GIF} className="col-span-1" alt="Example GIF" style={{ maxWidth: '90%', maxHeight: '90%' }} key={Date.now()} />
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
                                onClick={toggleFanStatus}
                                className={`btn-toggle ${fanStatus ? "bg-green-500" : "bg-red-500"}`}
                            >
                                {fanStatus ? "On" : "Off"}
                            </button>
                        </div>

                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanDirection" className="inline-block text-base font-medium mb-2">Fan Direction</label>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => changeFanDirection("Left")}
                                    className={`btn-toggle ${fanDirection === "Left" ? "bg-blue-500" : "bg-gray-300"}`}
                                >
                                    Kiri
                                </button>
                                <button
                                    onClick={() => changeFanDirection("Right")}
                                    className={`btn-toggle ${fanDirection === "Right" ? "bg-blue-500" : "bg-gray-300"}`}
                                >
                                    Kanan
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanSpeed" className="inline-block text-base font-medium mb-2">Fan Speed</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={fanSpeed}
                                    onChange={changeFanSpeed}
                                    style={{ width: "80%" }}
                                    className="slider"
                                />
                                <span className="text-base">{fanSpeed}%</span>
                            </div>
                        </div>

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


            {/* FAN CONTROL 2*/}
            <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-medium mb-4">Fan Control 2</h2>
                        {/* Control for Fan Status */}
                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanStatus" className="inline-block text-base font-medium mb-2">Fan Status</label>
                            <button
                                onClick={toggleFanStatus2}
                                className={`btn-toggle ${fanStatus2 ? "bg-green-500" : "bg-red-500"}`}
                            >
                                {fanStatus2 ? "On" : "Off"}
                            </button>
                        </div>

                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanDirection" className="inline-block text-base font-medium mb-2">Fan Direction</label>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => changeFanDirection2("Left")}
                                    className={`btn-toggle ${fanDirection2 === "Left" ? "bg-blue-500" : "bg-gray-300"}`}
                                >
                                    Kiri
                                </button>
                                <button
                                    onClick={() => changeFanDirection2("Right")}
                                    className={`btn-toggle ${fanDirection2 === "Right" ? "bg-blue-500" : "bg-gray-300"}`}
                                >
                                    Kanan
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mb-6">
                            <label htmlFor="fanSpeed" className="inline-block text-base font-medium mb-2">Fan Speed</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={fanSpeed2}
                                    onChange={changeFanSpeed2}
                                    style={{ width: "80%" }}
                                    className="slider"
                                />
                                <span className="text-base">{fanSpeed2}%</span>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={handleConfirm2}
                                className="bg-blue-500 text-white p-3 rounded-md"
                            >
                                Confirm and Send Data
                            </button>
                        </div>
                    </div>
                </div>
            </div>

{/* Heater Status */}
        <div className="col-span-12 card 2xl:col-span-15 2xl:row-span-2">
            <div className="card-body">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-medium mb-4">Heater Control (Lamp)</h2>
                    {/* Control for Heater Status */}
                    <div className="flex flex-col items-center mb-6">
                        <label htmlFor="heaterStatus" className="inline-block text-base font-medium mb-2">Heater Status</label>
                        <button
                            onClick={toggleHeaterStatus}
                            className={`btn-toggle ${heaterStatus ? "bg-green-500" : "bg-red-500"}`}
                        >
                            {heaterStatus ? "On" : "Off"}
                        </button>
                    </div>

                    {/* Control for Heater Level */}
                    <div className="flex flex-col items-center mb-6">
                        <label htmlFor="heaterLevel" className="inline-block text-base font-medium mb-2">Heater Level</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={heaterLevel}
                                onChange={changeHeaterLevel}
                                style={{ width: "80%" }}
                                className="slider"
                            />
                            <span className="text-base">{heaterLevel}%</span>
                        </div>
                    </div>

                    {/* Confirm Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleConfirm3}
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
