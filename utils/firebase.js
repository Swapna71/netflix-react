// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ZCFGW-chDAmjiagjERfVks70I6fnx5Y",
  authDomain: "netflix-react-efa3c.firebaseapp.com",
  projectId: "netflix-react-efa3c",
  storageBucket: "netflix-react-efa3c.appspot.com",
  messagingSenderId: "1056254804277",
  appId: "1:1056254804277:web:644cb5c5b853b47e6acc7c",
  measurementId: "G-PZ494HPJPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();