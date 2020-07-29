import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBjx2HFscRXXtZ8V_CMsCwjtQ0CLSPkhwo",
  authDomain: "beautica-theme.firebaseapp.com",
  databaseURL: "https://beautica-theme.firebaseio.com",
  projectId: "beautica-theme",
  storageBucket: "beautica-theme.appspot.com",
  messagingSenderId: "261250042707",
  appId: "1:261250042707:web:1d649c4c36a311f66f6fa6",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

// Create new user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  /*
   *
   * Check if user id is already exists or not
   * if not exists create new user profile
   *
   */

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error when creating a new user profile", error.msg);
    }
  }
};

// Sing in with Google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signinWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
