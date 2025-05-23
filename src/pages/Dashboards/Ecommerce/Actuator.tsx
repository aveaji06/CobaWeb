import React, { useState, useEffect } from 'react'; // Menambahkan useEffect
import {CalendarRange} from 'lucide-react';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";
import GIF from "../../../assets/images/feeder.gif";
import { database } from "config/config";
import { ref, set, onValue } from 'firebase/database'; // Menggunakan onValue untuk Firebase
import Tab from 'Common/Components/Tab/Tab';
const Actuator = () => {
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

    const formatDateInIndonesian = (dateString: string) => {
    const dateParts = dateString.split('_')[0]; // Ambil bagian tanggal (20250524)
    const year = dateParts.slice(0, 4);
    const month = parseInt(dateParts.slice(4, 6), 10);
    const day = dateParts.slice(6, 8);
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return `Tanggal ${day} ${months[month - 1]} ${year}`;
};

// Fungsi untuk format jam (contoh: 1200 menjadi Jam 12.00)
const formatTime = (dateString: string) => {
    const timeParts = dateString.split('_')[1]; // Ambil bagian jam (1200)
    const hour = timeParts.slice(0, 2);
    const minute = timeParts.slice(2, 4);
    return `Jam ${hour}:${minute}`;
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
                setFanStatus2(fanData2.status2 === 'ON');
                setFanDirection2(fanData2.direction2);
                setFanSpeed2(fanData2.speed2);
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

                    {/* FAN1 */}

                    <div className="order-5 md:col-span-4 lg:col-span-4 col-span-12 2xl:order-1 card 2xl:col-span-4 2xl:row-span-1">
                        <div className="card-body">
                            <div className="flex flex-col items-start">
                                {/* Teks Fan Control di tengah */}
                                <div className="w-full text-center mb-4">  {/* Membungkus Fan Control dengan div yang diberi text-center */}
                                    <h2 className="text-sm font-medium">Fan Control</h2>
                                </div>

                                {/* Fan Status and Fan Direction in the same row */}
                                <div className="flex justify-between w-full mb-4">
                                    {/* Fan Status */}
                                    <div className="flex flex-col items-start">
                                        <label htmlFor="fanStatus" className="inline-block text-sm font-medium mb-1 text-left">Fan Status</label>
                                        <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                            <input
                                                type="checkbox"
                                                id="skyDefaultSwitch"
                                                className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-sky-500 dark:checked:border-sky-500 arrow-none"
                                                checked={fanStatus}
                                                onChange={toggleFanStatus}
                                            />
                                            <label htmlFor="skyDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer transition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-sky-500 peer-checked/published:border-sky-500"></label>
                                        </div>
                                        <span className="ml-2 text-xs">{fanStatus ? "On" : "Off"}</span>
                                    </div>

                                    {/* Fan Direction */}
                                    <div className="flex flex-col items-start">
                                        <label htmlFor="fanDirection" className="inline-block text-sm font-medium mb-1 text-left">Fan Direction</label>
                                        <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                            <input
                                                type="checkbox"
                                                id="fanDirectionSwitch"
                                                className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-sky-500 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-sky-500 dark:checked:border-sky-500 arrow-none"
                                                checked={fanDirection === "Right"}  // Assuming 'Right' direction is checked
                                                onChange={() => changeFanDirection(fanDirection === "Right" ? "Left" : "Right")}  // Toggle direction
                                            />
                                            <label htmlFor="fanDirectionSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer transition border-sky-500 dark:border-zink-500 bg-sky-500 dark:bg-zink-600 peer-checked/published:bg-sky-500 peer-checked/published:border-sky-500"></label>
                                        </div>
                                        <span className="ml-2 text-xs">{fanDirection === "Right" ? "Right" : "Left"}</span>
                                    </div>
                                </div>

                                {/* Fan Speed Control */}
                                <div className="flex flex-col items-start mb-4">
                                    <label htmlFor="fanSpeed" className="inline-block text-sm font-medium mb-1 text-left">Fan Speed</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={fanSpeed}
                                            onChange={changeFanSpeed}
                                            style={{ width: "70%" }}
                                            className="slider"
                                        />
                                        <span className="text-sm">{fanSpeed}%</span>
                                    </div>
                                </div>

                                {/* Confirm Button */}
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleConfirm}
                                        className="bg-blue-500 text-white p-2 rounded-md text-sm"
                                    >
                                        Confirm and Send Data
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>



            {/* FAN CONTROL 2 */}
            <div className="order-4 md:col-span-4 lg:col-span-4 col-span-12 2xl:order-2 card 2xl:col-span-4 2xl:row-span-1">
                <div className="card-body">
                    <div className="flex flex-col items-start">
                        {/* Fan Control 2 Title */}
                        <div className="w-full text-center mb-4">
                            <h2 className="text-sm font-medium">Fan Control 2</h2>
                        </div>

            {/* Fan Status and Fan Direction in the same row */}
            <div className="flex justify-between w-full mb-4">
                {/* Fan Status */}
                <div className="flex flex-col items-start">
                    <label htmlFor="fanStatus2" className="inline-block text-sm font-medium mb-1 text-left">Fan Status2</label>
                    <div className="flex flex-col items-center">
                        <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                            <input
                                type="checkbox"
                                name="fanSwitch2"
                                id="fanStatusSwitch2"
                                className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-sky-500 dark:checked:border-sky-500 arrow-none"
                                checked={fanStatus2}
                                onChange={toggleFanStatus2}
                            />
                            <label htmlFor="fanStatusSwitch2" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer transition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-sky-500 peer-checked/published:border-sky-500"></label>
                        </div>
                        {/* Text for On/Off placed below switch */}
                        <span className="ml-2 text-xs">{fanStatus2 ? "On" : "Off"}</span>
                    </div>
                </div>

                {/* Fan Direction */}
                    <div className="flex flex-col items-start">
                        <label htmlFor="fanDirection2" className="inline-block text-sm font-medium mb-1 text-left">Fan Direction2</label>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input
                                    type="checkbox"
                                    id="fanDirectionSwitch2"
                                    className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-sky-500 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-sky-500 dark:checked:border-sky-500 arrow-none"
                                    checked={fanDirection2 === "Right"}  // Assuming 'Right' direction is checked
                                    onChange={() => changeFanDirection2(fanDirection2 === "Right" ? "Left" : "Right")}  // Toggle direction
                                />
                                <label htmlFor="fanDirectionSwitch2" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer transition border-sky-500 dark:border-zink-500 bg-sky-500 dark:bg-zink-600 peer-checked/published:bg-sky-500 peer-checked/published:border-sky-500"></label>
                            </div>
                        </div>
                        {/* Text for Left/Right placed below switch */}
                        <span className="ml-2 text-xs">{fanDirection2 === "Right" ? "Right" : "Left"}</span>
                    </div>
                </div>

                        {/* Fan Speed Control */}
                        <div className="flex flex-col items-start mb-4">
                            <label htmlFor="fanSpeed2" className="inline-block text-sm font-medium mb-1 text-left">Fan Speed2</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={fanSpeed2}
                                    onChange={changeFanSpeed2}
                                    style={{ width: "70%" }}
                                    className="slider"
                                />
                                <span className="text-sm">{fanSpeed2}%</span>
                            </div>
                        </div>

                        {/* Confirm Button */}
                        <div className="flex justify-center">
                            <button
                                onClick={handleConfirm2}
                                className="bg-blue-500 text-white p-2 rounded-md text-sm"
                            >
                                Confirm and Send Data
                            </button>
                        </div>
                    </div>
                </div>
            </div>














                        {/* Heater Control */}
                        <div className="order-3 md:col-span-4 lg:col-span-4 col-span-12 2xl:order-3 card 2xl:col-span-4 2xl:row-span-1">
                            <div className="card-body">
                                <div className="flex flex-col items-start">
                                    {/* Heater Control Title */}
                                    <div className="w-full text-center mb-4">
                                        <h2 className="text-sm font-medium">Heater Control (Lamp)</h2>
                                    </div>

                                    {/* Heater Status Control */}
                                    <div className="flex justify-between w-full mb-4">
                                        {/* Heater Status */}
                                        <div className="flex flex-col items-start">
                                            <label htmlFor="heaterStatus" className="inline-block text-sm font-medium mb-1 text-left">Heater Status</label>
                                        </div>

                                        {/* On/Off Button */}
                                        <div className="flex items-center">
                                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                                <input
                                                    type="checkbox"
                                                    name="heaterStatusSwitch"
                                                    id="heaterStatusSwitch"
                                                    className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-sky-500 dark:checked:border-sky-500 arrow-none"
                                                    checked={heaterStatus}
                                                    onChange={toggleHeaterStatus}
                                                />
                                                <label htmlFor="heaterStatusSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer transition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-sky-500 peer-checked/published:border-sky-500"></label>
                                            </div>
                                            <span className="ml-2 text-xs">{heaterStatus ? "On" : "Off"}</span>
                                        </div>
                                    </div>

                                    {/* Heater Level Control */}
                                    <div className="flex flex-col items-start mb-4">
                                        <label htmlFor="heaterLevel" className="inline-block text-sm font-medium mb-1 text-left">Heater Level</label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={heaterLevel}
                                                onChange={changeHeaterLevel}
                                                style={{ width: "70%" }}
                                                className="slider"
                                            />
                                            <span className="text-sm">{heaterLevel}%</span>
                                        </div>
                                    </div>

                                    {/* Confirm Button */}
                                    <div className="flex justify-center">
                                        <button
                                            onClick={handleConfirm3}
                                            className="bg-blue-500 text-white p-2 rounded-md text-sm"
                                        >
                                            Confirm and Send Data
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>












             {/* Upcoming Schedules Section */}

             
<Tab.Container defaultActiveKey="upcomingSchedules">
    <div className="order-1 md:col-span-4 lg:col-span-4 col-span-12 2xl:order-4 card 2xl:col-span-4 2xl:row-span-1">
        <div className="card-body">
            <h6 className="text-15 mb-4">Upcoming Feed Schedules</h6>
            <Tab.Content className="relative h-[200px] overflow-y-auto">
                {/* Tab.Pane untuk menampilkan feed schedules */}
                <Tab.Pane eventKey="upcomingSchedules">
                    {upcomingSchedules.length > 0 ? (
                        upcomingSchedules.map((schedule, index) => (
                            <div key={index} className="bg-gray-100 p-2 mb-3 rounded-md">
                                <p><strong>
                                    {/* Mengubah format tanggal dan waktu */}
                                    {formatDateInIndonesian(schedule.date)}   {formatTime(schedule.date)}
                                </strong></p>
                                <p><strong>Jumlah :</strong> {schedule.amount} Grams</p>
                            </div>
                        ))
                    ) : (
                        <p>No upcoming schedules.</p>
                    )}
                </Tab.Pane>

                {/* Tab.Pane lain jika diperlukan */}
                <Tab.Pane eventKey="otherTab">
                    {/* Konten untuk tab lain */}
                    <p>Content for other tab</p>
                </Tab.Pane>
            </Tab.Content>
        </div>
    </div>
</Tab.Container>







            {/* Chicken Feeder Section */}
            <div className="order-2 md:col-span-8 lg:col-span-8 col-span-12 2xl:order-5 card 2xl:col-span-8 2xl:row-span-1">
                <div className="card-body">
                    <div className="flex flex-col gap-4 mb-1 md:mb-3 md:items-center md:flex-row">
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
                    <div className="grid grid-cols-3 mt-1">
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
                        <img src={GIF} className="col-span-1" alt="Example GIF" style={{ maxWidth: '70%', maxHeight: '70%' }} key={Date.now()} />
                    </div>
                    <div className="mt-4 mx-auto flex justify-center gap-3">
                    <button className="mr-2 border-2 border-blue-500 text-blue-500 rounded p-0.5 text-base sm:p-0.2 sm:text-sm w-full sm:w-400">
                        Schedule it
                    </button>
                    <button
                        onClick={handleConfirmFeed}
                        className="bg-blue-500 text-white rounded p-0.5 text-xs  sm:text-sm w-full sm:w-400"
                    >
                        Confirm and Send
                    </button>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};
export default Actuator;
