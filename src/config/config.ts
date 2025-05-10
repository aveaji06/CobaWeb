import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



  const DB_CONFIG ={
    apiKey: "AIzaSyABTKRckyOfBqbHyNjLJWSCVZfjrEGhUIY",
    authDomain: "coba-ddcac.firebaseapp.com",
    databaseURL: "https://coba-ddcac-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "coba-ddcac",
    storageBucket: "coba-ddcac.firebasestorage.app",
    messagingSenderId: "915400809594",
    appId: "1:915400809594:web:47827020a2430945172fc3",
    measurementId: "G-JFN614W7V1"
  };
  const app = initializeApp(DB_CONFIG);
  const database = getDatabase(app);
  
  export { database };
  