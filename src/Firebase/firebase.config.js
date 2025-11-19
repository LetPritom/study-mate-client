// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA99AesIFvwV-w_UPzys0CEG1wX2O-8NeY",
  authDomain: "study-mate-4c8b2.firebaseapp.com",
  projectId: "study-mate-4c8b2",
  storageBucket: "study-mate-4c8b2.firebasestorage.app",
  messagingSenderId: "311002080292",
  appId: "1:311002080292:web:90c1e7dba04ebad9b3a4b1"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
