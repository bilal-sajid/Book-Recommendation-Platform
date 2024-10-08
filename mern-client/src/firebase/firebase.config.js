// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0FL65dS9yAGFiRt-7SEtqaUvRdruglfA",
  authDomain: "mern-book-inventory-1621b.firebaseapp.com",
  projectId: "mern-book-inventory-1621b",
  storageBucket: "mern-book-inventory-1621b.appspot.com",
  messagingSenderId: "133656523920",
  appId: "1:133656523920:web:b9fcc56da7cc17fd845415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;