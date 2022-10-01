import React from 'react'
import {savePersonName} from '../api'

function Crud(){
    const [nombre, setNombre]= React.useState(null)

    const savePerson=()=>{
        savePersonName(nombre);
    }

    return(
        <div className='crud'>
            <input type="text" onChange={e=> setNombre(e.target.value)}></input>
            <button onClick={savePerson}>Guardar</button>
        </div>
    )
}
export default Crud