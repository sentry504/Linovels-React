// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjybj3cEHESmIxX7KGLFzzsWJwc6Z96PI",
  authDomain: "fir-crud-30c63.firebaseapp.com",
  projectId: "fir-crud-30c63",
  storageBucket: "fir-crud-30c63.appspot.com",
  messagingSenderId: "370861414200",
  appId: "1:370861414200:web:f48492dac18c25149b53cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage= getStorage();
export default app