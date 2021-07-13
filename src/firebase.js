import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBL6bmKsm4EHj3TRV1nRGQyghWnqizM0Ec",
  authDomain: "linked-in-clone-d75b2.firebaseapp.com",
  projectId: "linked-in-clone-d75b2",
  storageBucket: "linked-in-clone-d75b2.appspot.com",
  messagingSenderId: "1081771550607",
  appId: "1:1081771550607:web:d47d9da67a75f0cd070dfa",
  measurementId: "G-N6G1KW8MV4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
