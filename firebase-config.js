
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXHCzAGzaISu4uKBxTXNkATI5v4ETmWQI",
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
