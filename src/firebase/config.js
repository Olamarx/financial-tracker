import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQYxb9RdbZ4xF94K_CUfuA7JY9AMOZI5I",
  authDomain: "money-app-3e081.firebaseapp.com",
  projectId: "money-app-3e081",
  storageBucket: "money-app-3e081.appspot.com",
  messagingSenderId: "51508446621",
  appId: "1:51508446621:web:4aef496af995c37d12db74"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

const projectAuth = firebase.auth()

// Timestamp

const timestamp = firebase.firestore.Timestamp
export { projectFirestore, projectAuth, timestamp }
