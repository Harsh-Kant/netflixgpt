// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTxNgU3E8LG1iThxoC_2SuHedTqqA9oS4",
  authDomain: "netflixgpt-c119e.firebaseapp.com",
  projectId: "netflixgpt-c119e",
  storageBucket: "netflixgpt-c119e.firebasestorage.app",
  messagingSenderId: "493293697997",
  appId: "1:493293697997:web:82406a44dc568762a72284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()