import firebase, { firestore } from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBGh7Y1FYH0qFTZXgUdl0lZQ6dOIgsaTis",
    authDomain: "online-shop-9f5e8.firebaseapp.com",
    databaseURL: "https://online-shop-9f5e8.firebaseio.com",
    projectId: "online-shop-9f5e8",
    storageBucket: "online-shop-9f5e8.appspot.com",
    messagingSenderId: "557079856757",
    appId: "1:557079856757:web:746e8fe170267e3c2a5a3c",
    measurementId: "G-DD4LS4TXVB"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;
    const userRef = fireStore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get() 
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({displayName,email,createdAt,...additionalData})
        } catch(error){
            console.log('error creating user',error.message)
        }
    }
    return userRef
}
  firebase.initializeApp(config)
  export const auth = firebase.auth()
  export const fireStore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle= () =>auth.signInWithPopup(provider)

  export default firebase