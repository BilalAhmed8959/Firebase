import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCm9X6sHolXnScuh2k5nIi4KhCBYgUMd7s",
  authDomain: "fir-a3e69.firebaseapp.com",
  projectId: "fir-a3e69",
  storageBucket: "fir-a3e69.firebasestorage.app",
  messagingSenderId: "350530765549",
  appId: "1:350530765549:web:a9e8f490c7cd1414c942e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
