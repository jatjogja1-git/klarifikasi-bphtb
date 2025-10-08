// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Masukkan konfigurasi Firebase Anda di sini
  apiKey: "AIzaSyCkVDN-uGXxzcCwsAqzpmB4rIPo2LCWcPI",
  authDomain: "klarifikasi-bphtb.firebaseapp.com",
  projectId: "klarifikasi-bphtb",
  storageBucket: "klarifikasi-bphtb.firebasestorage.app",
  messagingSenderId: "293539281829",
  appId: "1:293539281829:web:866624313359520f51864c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const sendResetEmail = sendPasswordResetEmail;