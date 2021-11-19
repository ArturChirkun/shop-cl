import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBTgEA6-b0kQo17eFmTTPBOutifVeIqk9o",
    authDomain: "shop-cl.firebaseapp.com",
    projectId: "shop-cl",
    storageBucket: "shop-cl.appspot.com",
    messagingSenderId: "116578682078",
    appId: "1:116578682078:web:c87b7bd697b55c57a12e4f",
    measurementId: "G-BPCX6KEDX2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;