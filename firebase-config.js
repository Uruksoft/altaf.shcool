import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, collection, doc, setDoc, getDoc,
  addDoc, query, where, getDocs, updateDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXpvtI4a9WLUpoyiJwLXv4chO8xqKxLIE",
  authDomain: "al-tuff-school.firebaseapp.com",
  projectId: "al-tuff-school",
  storageBucket: "al-tuff-school.appspot.com",
  messagingSenderId: "206609512705",
  appId: "1:206609512705:web:fae84d318f96bc7adf4300"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db, auth,
  collection, doc, setDoc, getDoc, addDoc, query, where, getDocs, updateDoc,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged
};