// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCNvjVHy-NcfTjr9THNkA1jDUTi85PIOY8",
  authDomain: "glimmer-app-9b128.firebaseapp.com",
  projectId: "glimmer-app-9b128",
  storageBucket: "glimmer-app-9b128.appspot.com",
  messagingSenderId: "1061450959031",
  appId: "1:1061450959031:web:425e6896d16de351d66532",
  measurementId: "G-BWLW6TQ7LL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
