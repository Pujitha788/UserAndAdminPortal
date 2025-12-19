// Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAh3K7b3TpOIF3t3fclsODnunVFxgQAelA",
  authDomain: "cricketgallery.firebaseapp.com",
  projectId: "cricketgallery",
  storageBucket: "cricketgallery.firebasestorage.app",
  messagingSenderId: "589498735752",
  appId: "1:589498735752:web:cb7a3c1152d0a51d2b533d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login button
document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User:", result.user);
      window.location.href = "User.html"; // redirect after login
    })
    .catch((error) => {
      alert(error.message);
    });
});
