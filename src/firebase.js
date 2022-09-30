// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;