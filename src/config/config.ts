import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



  const DB_CONFIG ={
  apiKey: "AIzaSyAXAIs7ErQT5ZxWfs3-gufvzCknj2AAk24",
  authDomain: "coba2-876b1.firebaseapp.com",
  databaseURL: "https://coba2-876b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coba2-876b1",
  storageBucket: "coba2-876b1.firebasestorage.app",
  messagingSenderId: "873819054942",
  appId: "1:873819054942:web:58cb418daf0ef297b2e5cf",
  measurementId: "G-3GGND3QPB8"
};
  const app = initializeApp(DB_CONFIG);
  const database = getDatabase(app);
  
  export { database };
  