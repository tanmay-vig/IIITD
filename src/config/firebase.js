import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbNa5xD-Pe-0KWJLJFV-SxhHtdAXoxzBQ",
  authDomain: "fineair-9dbce.firebaseapp.com",
  projectId: "fineair-9dbce",
  storageBucket: "fineair-9dbce.appspot.com",
  messagingSenderId: "900239946708",
  appId: "1:900239946708:web:18e04e4e833e398b67dc41",
  measurementId: "G-4JKHEPT5EE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);