import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhZus3mf8k-mBIfvuYM5hpUcgcVamRAyg",
  authDomain: "react-app-399b7.firebaseapp.com",
  projectId: "react-app-399b7",
  storageBucket: "react-app-399b7.appspot.com",
  messagingSenderId: "938464876614",
  appId: "1:938464876614:web:1be1abf50a4f0932001247",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
