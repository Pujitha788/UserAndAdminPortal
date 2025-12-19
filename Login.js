
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup }
  from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAh3K7b3TpOIF3t3fclsODnunVFxgQAelA",
  authDomain: "cricketgallery.firebaseapp.com",
  projectId: "cricketgallery",
  storageBucket: "cricketgallery.firebasestorage.app",
  messagingSenderId: "589498735752",
  appId: "1:589498735752:web:cb7a3c1152d0a51d2b533d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "User.html";
    })
    .catch(err => alert(err.message));
});