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



  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('user create error', error.massage)
      }
    }
    return userRef
  };

  export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
    })

    return await batch.commit();
  }

  export const convertSnapshotToMap = (collections) => {

    const transformedCollection = collections.docs.map((doc) => {
      const { title, items} = doc.data();
      
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    })

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;