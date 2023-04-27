// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHLw1sddvSSR8Cg-_HaKX-LEQ2aQmRi74",
  authDomain: "e-commerce-340b1.firebaseapp.com",
  projectId: "e-commerce-340b1",
  storageBucket: "e-commerce-340b1.appspot.com",
  messagingSenderId: "249540448407",
  appId: "1:249540448407:web:16b0ed139b15e1c30299d2",
  measurementId: "G-430E78VNRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)