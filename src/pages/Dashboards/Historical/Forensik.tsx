import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";
import { 
    EnvironmentComparisonChartSuhu,
    EnvironmentComparisonChartKelembaban,
    EnvironmentComparisonChartCO2,
    EnvironmentComparisonChartDebu,
    EnvironmentComparisonChartNH3 
} from './Charts';

const Forensik = () => {
    // State untuk menyimpan sensor yang dipilih, dengan default kosong
    const [selectedSensor, setSelectedSensor] = useState<string>("");
    // State untuk menyimpan rentang tanggal yang dipilih untuk grafik pertama
    const [selectedDateRange, setSelectedDateRange] = useState<[Date, Date] | null>(null);
    // State untuk menyimpan pilihan grafik lain yang akan ditampilkan
    const [otherSelectedSensor, setOtherSelectedSensor] = useState<string>("");

    // Fungsi untuk menangani perubahan pilihan sensor pertama
    const handleSensorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSensor(e.target.value);
    };

    // Fungsi untuk menangani perubahan pilihan grafik lainnya
    const handleOtherSensorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOtherSelectedSensor(e.target.value);
    };

    // Fungsi untuk menangani perubahan pilihan rentang tanggal pertama
    const handleDateChange = (date: Date[]) => {
        if (date.length === 2) {
            setSelectedDateRange([date[0], date[1]]);
        }
    };

    // Trigger the fetch immediately when the date range is selected
    useEffect(() => {
        if (selectedDateRange) {
            // Fetch data when the date range is selected
            const startDate = selectedDateRange[0].toLocaleDateString();
            const endDate = selectedDateRange[1].toLocaleDateString();
        }
    }, [selectedDateRange]); // Run this when the date range changes

    return (
        <React.Fragment>
            {/* Judul "Data Forensik" */}
            <div className="col-span-12">
                <h1 className="text-xl font-semibold mb-4">Data Forensik</h1>
            </div>

            {/* Dropdown Pilihan Sensor */}
            <div className="col-span-12 mb-4">
                <label htmlFor="sensorSelect" className="mr-2">Pilih Sensor:</label>
                <select
                    id="sensorSelect"
                    value={selectedSensor}
                    onChange={handleSensorChange}
                    className="form-select"
                >
                    <option value="">Pilih Sensor</option> {/* Opsi default untuk memilih sensor */}
                    <option value="suhu">Suhu</option>
                    <option value="kelembaban">Kelembaban</option>
                    <option value="CO2">CO2</option>
                    <option value="NH3">NH3</option>
                    <option value="Debu">Debu</option>
                </select>
            </div>

            {/* Pilihan Tanggal */}
            {selectedSensor && (
                <div className="col-span-12 mb-4">
                    <label htmlFor="datePicker" className="mr-2">Pilih Rentang Tanggal:</label>
                    <Flatpickr
                        id="datePicker"
                        className="form-input"
                        value={selectedDateRange ? [selectedDateRange[0], selectedDateRange[1]] : []}
                        onChange={handleDateChange}
                        options={{
                            dateFormat: "d M, Y",
                            enableTime: false,
                            mode: "range", // Memungkinkan pemilihan rentang tanggal
                            onClose: () => {
                                if (selectedDateRange) {
                                    // Jika dua tanggal sudah dipilih, tutup kalender
                                    const calendar = document.querySelector('.flatpickr-calendar');
                                    if (calendar) {
                                        calendar.classList.remove('open');
                                    }
                                }
                            }
                        }}
                    />
                </div>
            )}

            {/* Render Chart Based on Selected Sensor */}
            {selectedSensor && selectedDateRange && selectedSensor === "suhu" && (
                <EnvironmentComparisonChartSuhu chartId="environmentDataChartSuhu" selectedDateRange={selectedDateRange} />
            )}
            {selectedSensor && selectedDateRange && selectedSensor === "kelembaban" && (
                <EnvironmentComparisonChartKelembaban chartId="environmentDataChartKelembaban" selectedDateRange={selectedDateRange} />
            )}
            {selectedSensor && selectedDateRange && selectedSensor === "CO2" && (
                <EnvironmentComparisonChartCO2 chartId="environmentDataChartCO2" selectedDateRange={selectedDateRange} />
            )}
            {selectedSensor && selectedDateRange && selectedSensor === "NH3" && (
                <EnvironmentComparisonChartNH3 chartId="environmentDataChartNH3" selectedDateRange={selectedDateRange} />
            )}
            {selectedSensor && selectedDateRange && selectedSensor === "Debu" && (
                <EnvironmentComparisonChartDebu chartId="environmentDataChartDebu" selectedDateRange={selectedDateRange} />
            )}

            {/* Render the other components if needed */}
        </React.Fragment>
    );
};

export default Forensik;
