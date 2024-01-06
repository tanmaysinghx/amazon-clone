import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH--IXqELMIxFOEnrDfO9ZSveZifHPbNU",
  authDomain: "tanmay-cc134.firebaseapp.com",
  databaseURL: "https://tanmay-cc134.firebaseio.com",
  projectId: "tanmay-cc134",
  storageBucket: "tanmay-cc134.appspot.com",
  messagingSenderId: "832198394465",
  appId: "1:832198394465:web:0b639f053bf28ff0d22020",
  measurementId: "G-3YK7Y64B2S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };