import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const savePersonName= (nombre)=>{
    addDoc(collection(db,"personas"),{nombre});
}