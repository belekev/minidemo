import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk78yr95EZokvExvmuHJgcu3T-jcIW-ps",
  authDomain: "minidemo-28f39.firebaseapp.com",
  projectId: "minidemo-28f39",
  storageBucket: "minidemo-28f39.firebasestorage.app",
  messagingSenderId: "321003466952",
  appId: "1:321003466952:web:a38a91bf771d8bd45ef5fd",
  measurementId: "G-F9DHG98C2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};