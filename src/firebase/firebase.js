// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAc74oahu0aDlufohyHvEJ7TrrE3go2Xac",
  authDomain: "instagram-hamitlicina.firebaseapp.com",
  projectId: "instagram-hamitlicina",
  storageBucket: "instagram-hamitlicina.appspot.com",
  messagingSenderId: "694282974294",
  appId: "1:694282974294:web:d879aac71a35c790aab7f7",
  measurementId: "G-S4K5J418V6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
