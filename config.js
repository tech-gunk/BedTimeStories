import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBPgkfGtsjNLIPUh8b30PEHBw7yrU_Uo5o",
  authDomain: "tgbedtime-stories.firebaseapp.com",
  projectId: "tgbedtime-stories",
  storageBucket: "tgbedtime-stories.appspot.com",
  messagingSenderId: "414165082921",
  appId: "1:414165082921:web:4f870e5eac872dae334d38"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
