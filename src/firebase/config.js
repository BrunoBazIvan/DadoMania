// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN6-TWOKC7crEVYMMABuEQR12s97QT5Fc",
  authDomain: "dadomania-8cb5e.firebaseapp.com",
  projectId: "dadomania-8cb5e",
  storageBucket: "dadomania-8cb5e.appspot.com",
  messagingSenderId: "602916339734",
  appId: "1:602916339734:web:21992ba0230ac5736f7537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);