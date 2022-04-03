// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUur5mX4QmUhOD43Y4DylLALRGVfhdcW4",
  authDomain: "ishita-portfolio.firebaseapp.com",
  projectId: "ishita-portfolio",
  storageBucket: "ishita-portfolio.appspot.com",
  messagingSenderId: "148567517621",
  appId: "1:148567517621:web:033182e6386480fb1f91fc",
  measurementId: "G-BVJ8V79538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);