import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe0mApVDm9fz2Kgc_HvSHJwqAa0qa3uXU",
  authDomain: "tecnostore-coderhouse.firebaseapp.com",
  projectId: "tecnostore-coderhouse",
  storageBucket: "tecnostore-coderhouse.appspot.com",
  messagingSenderId: "233612394217",
  appId: "1:233612394217:web:ff04db9744c89adcc5fa78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =  getFirestore(app);
export const auth = getAuth(app);