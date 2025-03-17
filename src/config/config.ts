import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



  const DB_CONFIG ={
    apiKey: "AIzaSyCeKpp7BtShNRBFno_zA7iA9jPYiWVRgAQ",
    authDomain: "iotmencoba.firebaseapp.com",
    databaseURL: "https://iotmencoba-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iotmencoba",
    storageBucket: "iotmencoba.firebasestorage.app",
    messagingSenderId: "360250948706",
    appId: "1:360250948706:web:019e944238fbed4ac0a53b",
  };
  const app = initializeApp(DB_CONFIG);
  const database = getDatabase(app);
  
  export { database };
  