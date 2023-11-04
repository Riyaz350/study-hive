// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjqCQ6u7bY02NQM1sxhbJlJ_RdA_mb9L8",
  authDomain: "event-management-834b0.firebaseapp.com",
  projectId: "event-management-834b0",
  storageBucket: "event-management-834b0.appspot.com",
  messagingSenderId: "287671931503",
  appId: "1:287671931503:web:c218c29aec2ce5ca8d739a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;