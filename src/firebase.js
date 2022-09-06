// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcmRcn_Cf0UNCMSgEPO0IwaraE8bQEg5U',
  authDomain: "true-lache.firebaseapp.com",
  projectId: "true-lache",
  storageBucket: "true-lache.appspot.com",
  messagingSenderId: "153553252472",
  appId: "1:153553252472:web:7a3d9d2f61702f73083d8d",
  measurementId: "G-EPCZ497K2S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
