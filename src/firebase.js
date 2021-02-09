import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_pf6b_lyc3dVx3Msygq4HkH3Bm5FSB2E",
    authDomain: "snapchat-clone-ce419.firebaseapp.com",
    projectId: "snapchat-clone-ce419",
    storageBucket: "snapchat-clone-ce419.appspot.com",
    messagingSenderId: "92722069040",
    appId: "1:92722069040:web:1f92dc25d84e1a4baff7f5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };