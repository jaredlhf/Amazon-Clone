import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnsrUYyWiffsVjVhAHkWUZTP1vNciQKaQ",
    authDomain: "clone-62637.firebaseapp.com",
    projectId: "clone-62637",
    storageBucket: "clone-62637.appspot.com",
    messagingSenderId: "217681377669",
    appId: "1:217681377669:web:571fd06e30e62977a12cec",
    measurementId: "G-ZL92Q5R4X0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };