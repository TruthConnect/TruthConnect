// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvO7UGCEeqQBPGQ1HxdMew0hFaxht-lJA",
  authDomain: "truthconnect-e70e6.firebaseapp.com",
  projectId: "truthconnect-e70e6",
  storageBucket: "truthconnect-e70e6.appspot.com",
  messagingSenderId: "346958468660",
  appId: "1:346958468660:web:f932102860bee78be39c61",
  measurementId: "G-ZQTF9H3Z30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);