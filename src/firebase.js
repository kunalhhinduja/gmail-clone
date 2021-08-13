import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDR6fMT7ORstAkcv4cVqAk6XkWPj9BteXI",
  authDomain: "clone-b00e6.firebaseapp.com",
  projectId: "clone-b00e6",
  storageBucket: "clone-b00e6.appspot.com",
  messagingSenderId: "715879700028",
  appId: "1:715879700028:web:cf164e20e9a135f5589539",
  measurementId: "G-B6EBGCY01N"
};

// This to initialize our firebase with iniitial configurations
const firebaseApp = firebase.initializeApp(firebaseConfig);

// To get data from our firebase store
const db = firebase.firestore();

// To connect with authentication feature
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};