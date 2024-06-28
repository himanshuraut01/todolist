// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4eNstJBO1ZvmtTdhBY3c2U-QmBJjoy5U",
  authDomain: "todo-app-43245.firebaseapp.com",
  projectId: "todo-app-43245",
  storageBucket: "todo-app-43245.appspot.com",
  messagingSenderId: "307921596766",
  appId: "1:307921596766:web:57100fadfe449e03ac5fcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);