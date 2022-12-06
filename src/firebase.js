import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAfJtCMedbMsTIOHnc3g51c-Yv-dRl-qg",
  authDomain: "chat-b5d4d.firebaseapp.com",
  projectId: "chat-b5d4d",
  storageBucket: "chat-b5d4d.appspot.com",
  messagingSenderId: "43025416094",
  appId: "1:43025416094:web:d85e351551e8c762d0a08f"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
