import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBHRpkZjlf-Wgc7e-ofQ0hYg_qJeUP5JaE",
    authDomain: "social-app-11bed.firebaseapp.com",
    projectId: "social-app-11bed",
    storageBucket: "social-app-11bed.appspot.com",
    messagingSenderId: "581361368336",
    appId: "1:581361368336:web:f6e2bf113f004b7f17f995"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebaseApp.auth()

  //explict exports
  export {auth};
  export default db;