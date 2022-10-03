import { collection, getDoc, addDoc} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import { db, storage } from './CRUD/firebase';

//Storage
//Referencia
export const storageRef= ref(storage,"Novelas/Overlord/Volumen1/Overlord-1-2.jpg");
console.log("Storage desde api: ",storageRef)
export function Imagen(){
  const Imagen= getDownloadURL(storageRef)
  return Imagen
}


//Firestore
// CREATE
export const save= async(capitulo, url)=>{
    console.log("desde api: ",capitulo, url)
    const colRef = collection(db, "Novelas","Overlord","Volumen1");
    await addDoc(colRef,{capitulo,url});
}

export const get= async(capitulo, url)=>{
    console.log("desde api: ",capitulo, url)
    const colRef = collection(db, "Novelas","Overlord","Volumen1");
    await getDoc(colRef,{capitulo,url});
}

