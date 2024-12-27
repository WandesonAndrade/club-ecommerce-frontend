// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnvf3Ze8-gcE7pQeHT-zo7xgi0m76tEas",
  authDomain: "club-ecommerce-fdce1.firebaseapp.com",
  projectId: "club-ecommerce-fdce1",
  storageBucket: "club-ecommerce-fdce1.firebasestorage.app",
  messagingSenderId: "30943742747",
  appId: "1:30943742747:web:a70b1fd0b9cee44f2321be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
