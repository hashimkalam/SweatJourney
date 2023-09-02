import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXOIC-UnjGNkW_YgF7zd1cvomGF6CzGt8",
  authDomain: "sweatjourney-43a86.firebaseapp.com",
  projectId: "sweatjourney-43a86",
  storageBucket: "sweatjourney-43a86.appspot.com",
  messagingSenderId: "109281354048",
  appId: "1:109281354048:web:cb51b80e0e107421169aa5",
  measurementId: "G-JV3VQTN9HT",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { auth, db, storage };
