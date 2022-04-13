// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup} from "firebase/auth";
import { useState , useEffect} from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrN7evwRBksNmS60XL0cuQEfGWqQAMNxs",
  authDomain: "react-recipe-a1a5c.firebaseapp.com",
  projectId: "react-recipe-a1a5c",
  storageBucket: "react-recipe-a1a5c.appspot.com",
  messagingSenderId: "71504645062",
  appId: "1:71504645062:web:a7b598204324521f7780c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
export const auth = getAuth(app)
