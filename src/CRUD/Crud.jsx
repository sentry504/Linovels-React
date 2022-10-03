import React from 'react'
import 'react-dom'
import {storageRef, save, Imagen} from '../api'

function Crud(){
    const initialStateValues= {
        url: Imagen.toString,
        name:""
    };

    const [values, SetValues]= React.useState(initialStateValues)

    const handdleInputChange= (e)=>{
        const {name, value}= e.target;
        SetValues({...values, [name]: value})
    };

    const savePerson=()=>{
        try{
            save(values.name,storageRef.fullPath)
            alert("REGISTRO GUARDADO")
        }catch(e){
            alert("NO SE PUDO GUARDAR EL REGISTRO")
        }
    }
    
    return(
        <div className='crud'>
            <label>Nombre</label>
            <input type="text" name="name" onChange={handdleInputChange}></input>
            <br/>
            <label>url</label>
            <input type="text" name="url" onChange={handdleInputChange}></input>
            <br/>
            <button onClick={savePerson}>Guardar</button>
            <p>{`gs://${storageRef.bucket}/${storageRef.fullPath}`}</p>
            <image>mycustomattribute={Imagen.toString}</image>
            
        </div>
    )
}
export default Crud