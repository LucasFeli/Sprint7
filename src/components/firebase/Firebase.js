
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "autenticacion-starwars.firebaseapp.com",
  projectId: "autenticacion-starwars",
  storageBucket: "autenticacion-starwars.appspot.com",
  messagingSenderId: "342789073154",
  appId: "1:342789073154:web:1104641e57bcad31c5fa1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app