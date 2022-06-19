import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQLII6KEbVru6HbRxL-b9ElRXrvCM4YBc",
  authDomain: "biloko-mern-ecommerce.firebaseapp.com",
  projectId: "biloko-mern-ecommerce",
  storageBucket: "biloko-mern-ecommerce.appspot.com",
  messagingSenderId: "722938632310",
  appId: "1:722938632310:web:77972678e492075e02e757",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
