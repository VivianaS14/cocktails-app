import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgJv52s2CcTfYF5BUC8XgGJLyt-7duphs",
  authDomain: "cocktails-app-f654d.firebaseapp.com",
  projectId: "cocktails-app-f654d",
  storageBucket: "cocktails-app-f654d.appspot.com",
  messagingSenderId: "168895033646",
  appId: "1:168895033646:web:e72092c6bae6f0e4520abf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
