// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGptfNz-ZHBkb4Ex8bdR1yBj1ACgKcKh4",
  authDomain: "comfy-c8bff.firebaseapp.com",
  projectId: "comfy-c8bff",
  storageBucket: "comfy-c8bff.appspot.com",
  messagingSenderId: "153285164464",
  appId: "1:153285164464:web:e0506d4c2ba17f9296ea75",
  measurementId: "G-Z0ZJX0Z2D1",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
