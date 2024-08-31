import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkn6yExbtmuI8_xrCAwqBMKi5hxb4OK3s",
  authDomain: "sih1-81d84.firebaseapp.com",
  projectId: "sih1-81d84",
  storageBucket: "sih1-81d84.appspot.com",
  messagingSenderId: "581516184010",
  appId: "1:581516184010:web:aa911e88ce925483a36733",
  measurementId: "G-2SR6R5JHLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);