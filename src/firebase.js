// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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


export default getFirestore();
const auth = getAuth();

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);

}