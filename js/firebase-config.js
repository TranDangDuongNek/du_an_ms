import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBCavUPw6x-jkKOQ3Byw7nC6SYj_gKERJU",
  authDomain: "du-an-event.firebaseapp.com",
  databaseURL: "https://du-an-event-default-rtdb.firebaseio.com",
  projectId: "du-an-event",
  storageBucket: "du-an-event.firebasestorage.app",
  messagingSenderId: "13117099421",
  appId: "1:13117099421:web:5ca7d61dd8db63301f3374",
  measurementId: "G-TXSLRKM3W6"
};

// 🔥 KHỞI TẠO
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
