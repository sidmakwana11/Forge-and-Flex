import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA08tzV5QdRJ1zpyeonYuI4bVb0aMdLsKw",
  authDomain: "forge-and-flex.firebaseapp.com",
  projectId: "forge-and-flex",
  storageBucket: "forge-and-flex.firebasestorage.app",
  messagingSenderId: "843232847351",
  appId: "1:843232847351:web:75e60e471f940f62b77af2",
  measurementId: "G-QTLGMBF6NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);