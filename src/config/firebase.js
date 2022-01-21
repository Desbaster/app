import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAmFwkg72pbqWbauulXnOZr3Uw5CyE3Qkk",
  authDomain: "gabilidades-react.firebaseapp.com",
  projectId: "gabilidades-react",
  storageBucket: "gabilidades-react.appspot.com",
  messagingSenderId: "873526442132",
  appId: "1:873526442132:web:fedb69cf9ca1b675885c81",
});

export const getFirebase= ()=>app;
export const getFirestore= ()=>firebase.firestore(app);

