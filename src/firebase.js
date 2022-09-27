/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, query, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
//import { post } from "../pages/post.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcmRcn_Cf0UNCMSgEPO0IwaraE8bQEg5U',
  authDomain: 'true-lache.firebaseapp.com',
  projectId: 'true-lache',
  storageBucket: 'true-lache.appspot.com',
  messagingSenderId: '153553252472',
  appId: '1:153553252472:web:7a3d9d2f61702f73083d8d',
  measurementId: 'G-EPCZ497K2S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export default { db, auth };
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    onNavigate('/post');
    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};

//Sign Out Google
export const signOutGoogle = () => {
    signOut(auth).then(() => {
    onNavigate('/');
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  // console.log(error.message);
});

};

//Ver en consola los post de la nube 
export const getPost = async () => {
  //const post = [];
  const querySnapshot = await getDocs(collection(db, 'usuarios'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

// Ver en el muro los post de la nube
const getCollection = () => {
  const consulta = query(collection (db, "usuarios"));
  const unsubcribe = onSnapshot (consulta, (resultadosConsulta) => {
    const misPosts = [];
     resultadosConsulta.forEach((doc) => {
      console.log({doc})
      console.log({data: doc.data()})
      misPosts.push(doc.data());
     });
  });
}

getCollection()

// Ver en la nube lo que posteamos
// export const addPost = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "usuarios"), {
//       nombre: nombre,

//       // nombre: post.container.querySelector(".name").value,
//       // post: post.container.querySelector(".inputPost").value,
//       // number: post.container.querySelector(".number").value,
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// };
// };