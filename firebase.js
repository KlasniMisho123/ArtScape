// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtH_9HokvAX5gIYtCZkenKqHfRvFlfw9I",
  authDomain: "artscape-b8c7b.firebaseapp.com",
  projectId: "artscape-b8c7b",
  storageBucket: "artscape-b8c7b.firebasestorage.app",
  messagingSenderId: "63829047262",
  appId: "1:63829047262:web:7090f9e39a8ac283524f4f",
  measurementId: "G-6D1XR3CCDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);