// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYJ1Nb5H0BkN85Omh2yZqKodP3AyVgVZo",
  authDomain: "react-netflix-96b16.firebaseapp.com",
  projectId: "react-netflix-96b16",
  storageBucket: "react-netflix-96b16.appspot.com",
  messagingSenderId: "471143048660",
  appId: "1:471143048660:web:ef45ab1eca902676bb6241",
  measurementId: "G-5E1122ETQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);