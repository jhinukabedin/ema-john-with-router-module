// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqCFgAjBEKyhe-gKybspV-11JpJonJILw",
  authDomain: "emajonstore.firebaseapp.com",
  projectId: "emajonstore",
  storageBucket: "emajonstore.appspot.com",
  messagingSenderId: "288997333817",
  appId: "1:288997333817:web:7ac5d1b7a6536088e226e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;