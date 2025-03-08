// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendPasswordResetEmail , signOut} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

import { getFirestore, collection, addDoc ,getDocs ,deleteDoc,doc,getDoc,updateDoc} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRSHNmtxJXWP9txFWZsY8zINYLo3_dOZA",
  authDomain: "practice-6a0c0.firebaseapp.com",
  projectId: "practice-6a0c0",
  storageBucket: "practice-6a0c0.firebasestorage.app",
  messagingSenderId: "159653623299",
  appId: "1:159653623299:web:c97517556b4ce8d0d54036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail , signOut, collection, addDoc,db,getDocs,deleteDoc,doc,getDoc ,updateDoc}