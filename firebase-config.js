
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXHCzAGzaISu4uKBxTXNkATI5v4ETmWQI",
  authDomain: "temani-care.firebaseapp.com",
  projectId: "temani-care",
  storageBucket: "temani-care.firebasestorage.app",
  messagingSenderId: "789280830618",
  appId: "1:789280830618:web:17a4fcd72f833199fddb23",
  measurementId: "G-DK81HZN4EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);",
  authDomain: "temani-care.firebaseapp.com",
  projectId: "temani-care",
  storageBucket: "temani-care.firebasestorage.app",
  messagingSenderId: "789280830618",
  appId: "1:789280830618:web:17a4fcd72f833199fddb23"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
