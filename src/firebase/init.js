// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARuE27PIW_V3vxa_dQvDN9DtENqY-3Gk8",
  authDomain: "fire-base-practice-98945.firebaseapp.com",
  projectId: "fire-base-practice-98945",
  storageBucket: "fire-base-practice-98945.appspot.com",
  messagingSenderId: "731664340093",
  appId: "1:731664340093:web:d6f2b1ded00e1c64b04d14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()