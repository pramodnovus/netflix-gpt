// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHFxY72UPE8Mh2nqy1ls5vUezDBqgvRs4",
  authDomain: "netflixgpt-c1495.firebaseapp.com",
  projectId: "netflixgpt-c1495",
  storageBucket: "netflixgpt-c1495.appspot.com",
  messagingSenderId: "408543091598",
  appId: "1:408543091598:web:d3dd8751ecd5c623ac22df",
  measurementId: "G-LNBKSDL7F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);