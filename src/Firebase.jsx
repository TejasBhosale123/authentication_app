// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcZwg1d2graj4cTeNPZP5KdQCGvoOy3uc",
  authDomain: "authentication-app-b0e9f.firebaseapp.com",
  projectId: "authentication-app-b0e9f",
  storageBucket: "authentication-app-b0e9f.firebasestorage.app",
  messagingSenderId: "974265881275",
  appId: "1:974265881275:web:80fd53168bbf2290e5cf9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;