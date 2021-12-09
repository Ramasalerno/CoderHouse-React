// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDRHoxB3yGYE4WS8cWoU-dcVencHEJtjM4",
  authDomain: "coderhouse-react-salernor.firebaseapp.com",
  projectId: "coderhouse-react-salernor",
  storageBucket: "coderhouse-react-salernor.appspot.com",
  messagingSenderId: "623031923382",
  appId: "1:623031923382:web:8d8929bc6648e91f3aec17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)