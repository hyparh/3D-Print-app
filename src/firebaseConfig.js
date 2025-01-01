import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQmi03tKXmPD-Y3P-vvyLineupam7gotI",
    authDomain: "d-print-app.firebaseapp.com",
    projectId: "d-print-app",
    storageBucket: "d-print-app.firebasestorage.app",
    messagingSenderId: "874116980011",
    appId: "1:874116980011:web:ac15b263a587b1e948f96e",
    measurementId: "G-XSPX7S2S4X"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);