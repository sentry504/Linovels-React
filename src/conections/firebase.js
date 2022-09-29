// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjwl9qk2j66syZ_Pw_bjpipM-eMuqRHdo",
  authDomain: "prueba-614da.firebaseapp.com",
  databaseURL: "https://prueba-614da.firebaseio.com",
  projectId: "prueba-614da",
  storageBucket: "prueba-614da.appspot.com",
  messagingSenderId: "263971806751",
  appId: "1:263971806751:web:877410737b041f1b76bf2a"
};

// Initialize Firebase
const fb= firebase.initializeApp(firebaseConfig);
export const db= fb.firestore();