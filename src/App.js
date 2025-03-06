import React, { Component } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { DB_CONFIG } from "./Config";

class App extends Component {
  constructor() {
    super();
    this.app = initializeApp(DB_CONFIG);
    this.database = getDatabase(this.app);
    this.dataRefs = {
      Amonia: "Kandang Ayam/Amonia/01-03-25",
      BeratAyam: "Kandang Ayam/Berat Ayam/01-03-25",
      CO2: "Kandang Ayam/CO2/01-03-25",
      Debu: "Kandang Ayam/Debu/01-03-25",
      IntensitasCahaya: "Kandang Ayam/Intensitas cahaya/01-03-25",
      KecepatanAngin: "Kandang Ayam/Kecepatan angin/01-03-25",
      KelembabanAyam: "Kandang Ayam/Kelembaban Ayam/01-03-25",
      PakanAyam: "Kandang Ayam/Pakan Ayam/01-03-25",
      StatusKipas: "Kandang Ayam/Status Kipas/01-03-25",
      StatusAir: "Kandang Ayam/Status air/01-03-25",
      SuhuAyam: "Kandang Ayam/Suhu Ayam/01-03-25",
      SuhuLingkunganKandang: "Kandang Ayam/Suhu lingkungan kandang/01-03-25",
      Kekeruhan: "Perikanan/Kekeruhan/01-03-25",
      OksigenTerlarut: "Perikanan/Oksigen Terlarut/01-03-25",
      SuhuKolam: "Perikanan/Suhu Kolam/01-03-25",
      pH: "Perikanan/pH/01-03-25",
    };
    this.state = {};
  }

  componentDidMount() {
    Object.entries(this.dataRefs).forEach(([key, path]) => {
      onValue(ref(this.database, path), (snapshot) => {
        if (snapshot.exists()) {
          this.setState({ [key]: snapshot.val() });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Data Sensor</h1>
        <h2>Amonia: {this.state.Amonia}</h2>
        <h2>Berat Ayam: {this.state.BeratAyam}</h2>
        <h2>CO2: {this.state.CO2}</h2>
        <h2>Debu: {this.state.Debu}</h2>
        <h2>Intensitas Cahaya: {this.state.IntensitasCahaya}</h2>
        <h2>Kecepatan Angin: {this.state.KecepatanAngin}</h2>
        <h2>Kelembaban Ayam: {this.state.KelembabanAyam}</h2>
        <h2>Pakan Ayam: {this.state.PakanAyam}</h2>
        <h2>Status Kipas: {this.state.StatusKipas}</h2>
        <h2>Status Air: {this.state.StatusAir}</h2>
        <h2>Suhu Ayam: {this.state.SuhuAyam}</h2>
        <h2>Suhu Lingkungan Kandang: {this.state.SuhuLingkunganKandang}</h2>
        <h2>Kekeruhan: {this.state.Kekeruhan}</h2>
        <h2>Oksigen Terlarut: {this.state.OksigenTerlarut}</h2>
        <h2>Suhu Kolam: {this.state.SuhuKolam}</h2>
        <h2>pH: {this.state.pH}</h2>
      </div>
    );
  }
}

export default App;
