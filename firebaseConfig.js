import firebase from "firebase";
import "firebase"/firestore;

  var firebaseConfig = {
    apiKey: "AIzaSyC7ZqOuuA_p-U7FKbTeeSMVE_N7brKA3rU",
    authDomain: "roma1-64fc2.firebaseapp.com",
    projectId: "roma1-64fc2",
    storageBucket: "roma1-64fc2.appspot.com",
    messagingSenderId: "592606364166",
    appId: "1:592606364166:web:f4216b6136aabe8317f987",
    measurementId: "G-NGC0V0DNV8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  

  const app =firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app)
  export const Nameref = db.collection("1111000")
  export {firebase};