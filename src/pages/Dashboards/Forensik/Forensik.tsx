import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";
import { Indonesian } from "flatpickr/dist/l10n/id.js";
import {
    EnvironmentComparisonChartSuhu,
    EnvironmentComparisonChartRTDTemp,
    EnvironmentComparisonChartKelembaban,
    EnvironmentComparisonChartCO2,
    EnvironmentComparisonChartDebu,
    EnvironmentComparisonChartNH3,
    EnvironmentComparisonChartPM2_5
} from './Charts';

const Forensik = () => {
    const [selectedSensor, setSelectedSensor] = useState<string>("");
    const [selectedDateRange, setSelectedDateRange] = useState<[Date, Date] | null>(null);
    const [secondSelectedSensor, setSecondSelectedSensor] = useState<string>("");
    const [secondSelectedDateRange, setSecondSelectedDateRange] = useState<[Date, Date] | null>(null);

    const handleSensorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSensor(e.target.value);
    };

    const handleSecondSensorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSecondSelectedSensor(e.target.value);
    };

    const handleDateChange = (date: Date[]) => {
        if (date.length === 2) {
            setSelectedDateRange([date[0], date[1]]);
        }
    };

    const handleSecondDateChange = (date: Date[]) => {
        if (date.length === 2) {
            setSecondSelectedDateRange([date[0], date[1]]);
        }
    };

    const handleRemoveSecondSensor = () => {
        setSecondSelectedSensor("");
        setSecondSelectedDateRange(null);
    };

    useEffect(() => {
        if (selectedDateRange) {
            const startDate = selectedDateRange[0].toLocaleDateString('id-ID');
            const endDate = selectedDateRange[1].toLocaleDateString('id-ID');
        }
    }, [selectedDateRange]);

    return (
        <React.Fragment>
            <div className="col-span-12">
                <h1 className="text-xl font-semibold mb-4 dark:text-white text-black">Data Forensik</h1>
            </div>

            <div className="col-span-12 mb-4">
                <label htmlFor="sensorSelect" className="mr-2 dark:text-white text-black">Pilih Sensor:</label>
                <select
                    id="sensorSelect"
                    value={selectedSensor}
                    onChange={handleSensorChange}
                    className="form-select dark:bg-gray-700 dark:text-white text-black"
                >
                    <option value="" disabled>Pilih Sensor</option>
                    <option value="suhu">Suhu Ayam</option>
                    <option value="suhuling">Suhu Lingkungan</option>
                    <option value="kelembaban">Kelembaban</option>
                    <option value="CO2">CO2</option>
                    <option value="NH3">NH3</option>
                    <option value="Debu10">Debu PM 10</option>
                    <option value="Debu2_5">Debu PM 2,5</option>
                </select>
            </div>

            {selectedSensor && (
                <div className="col-span-12 mb-4">
                    <label htmlFor="datePicker" className="mr-2 dark:text-white text-black">Pilih Rentang Tanggal:</label>
                    <Flatpickr
                        id="datePicker"
                        className="form-input dark:bg-gray-700 dark:text-white text-black"
                        value={selectedDateRange ? [selectedDateRange[0], selectedDateRange[1]] : []}
                        onChange={handleDateChange}
                        options={{
                            locale: Indonesian,
                            dateFormat: "d/m/Y",
                            enableTime: false,
                            mode: "range",
                            onClose: () => {
                                if (selectedDateRange) {
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

            {selectedSensor && selectedDateRange && selectedSensor === "suhu" && (
                <EnvironmentComparisonChartSuhu chartId="environmentDataChartSuhu" selectedDateRange={selectedDateRange} />
            )}
            {selectedSensor && selectedDateRange && selectedSensor === "suhuling" && (
                <EnvironmentComparisonChartRTDTemp chartId="environmentDataChartSuhuLingkungan" selectedDateRange={selectedDateRange} />
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
            {selectedSensor && selectedDateRange && selectedSensor === "Debu10" && (
                <EnvironmentComparisonChartDebu chartId="environmentDataChartDebu" selectedDateRange={selectedDateRange} />
            )}
            {selectedSensor && selectedDateRange && selectedSensor === "Debu2_5" && (
                <EnvironmentComparisonChartPM2_5 chartId="environmentDataChartDebu2_5" selectedDateRange={selectedDateRange} />
            )}

            {selectedDateRange && selectedSensor && (
                <div className="col-span-12 mb-4">
                    <label htmlFor="secondSensorSelect" className="mr-2 dark:text-white text-black">Pilih Sensor Kedua:</label>
                    <select
                        id="secondSensorSelect"
                        value={secondSelectedSensor}
                        onChange={handleSecondSensorChange}
                        className="form-select dark:bg-gray-700 dark:text-white text-black"
                    >
                        <option value="" disabled>Pilih Sensor</option>
                        <option value="suhu">Suhu Ayam</option>
                        <option value="suhuling">Suhu Lingkungan</option>
                        <option value="kelembaban">Kelembaban</option>
                        <option value="CO2">CO2</option>
                        <option value="NH3">NH3</option>
                        <option value="Debu10">Debu PM 10</option>
                        <option value="Debu2_5">Debu PM 2,5</option>
                    </select>
                </div>
            )}

            {secondSelectedSensor && (
                <div className="col-span-12 mb-4">
                    <label htmlFor="secondDatePicker" className="mr-2 dark:text-white text-black">Pilih Rentang Tanggal Kedua:</label>
                    <Flatpickr
                        id="secondDatePicker"
                        className="form-input dark:bg-gray-700 dark:text-white text-black"
                        value={secondSelectedDateRange ? [secondSelectedDateRange[0], secondSelectedDateRange[1]] : []}
                        onChange={handleSecondDateChange}
                        options={{
                            locale: Indonesian,
                            dateFormat: "d/m/Y",
                            enableTime: false,
                            mode: "range",
                            onClose: () => {
                                if (secondSelectedDateRange) {
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

            {secondSelectedSensor && secondSelectedDateRange && secondSelectedSensor === "suhu" && (
                <EnvironmentComparisonChartSuhu chartId="environmentDataChartSuhuSecond" selectedDateRange={secondSelectedDateRange} />
            )}
            {secondSelectedSensor && secondSelectedDateRange && secondSelectedSensor === "suhuling" && (
                <EnvironmentComparisonChartRTDTemp chartId="environmentDataChartSuhuLingkunganSecond" selectedDateRange={secondSelectedDateRange} />
            )}
            {secondSelectedSensor && secondSelectedDateRange && secondSelectedSensor === "kelembaban" && (
                <EnvironmentComparisonChartKelembaban chartId="environmentDataChartKelembabanSecond" selectedDateRange={secondSelectedDateRange} />
            )}
            {secondSelectedSensor && secondSelectedDateRange && secondSelectedSensor === "CO2" && (
                <EnvironmentComparisonChartCO2 chartId="environmentDataChartCO2Second" selectedDateRange={secondSelectedDateRange} />
            )}
            {secondSelectedSensor && secondSelectedDateRange && secondSelectedSensor === "NH3" && (
                <EnvironmentComparisonChartNH3 chartId="environmentDataChartNH3Second" selectedDateRange={secondSelectedDateRange} />
            )}
            {secondSelectedSensor && secondSelectedDateRange && secondSelectedSensor === "Debu10" && (
                <EnvironmentComparisonChartDebu chartId="environmentDataChartDebuSecond" selectedDateRange={secondSelectedDateRange} />
            )}
            {secondSelectedSensor && secondSelectedDateRange && secondSelectedSensor === "Debu2_5" && (
                <EnvironmentComparisonChartPM2_5 chartId="environmentDataChartDebu2_5Second" selectedDateRange={secondSelectedDateRange} />
            )}

            {secondSelectedSensor && (
                <div className="col-span-12 mb-4">
                    <button
                        onClick={handleRemoveSecondSensor}
                        className="btn btn-danger dark:bg-gray-600 dark:text-white text-black"
                    >
                        Hapus Sensor Kedua
                    </button>
                </div>
            )}
        </React.Fragment>
    );
};

export default Forensik;