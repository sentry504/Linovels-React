import { useState } from "react";

export default function FormWithFirebaseComponent() {

    const initialStateValues= {
        url:"",
        name:""
    };

    const [values, SetValues]= useState(initialStateValues);

    const handdleInputChange= (e)=>{
        const {name, value}= e.target;
        SetValues({...values, [name]: value})
    };

    const handleSumit= (e)=>{
        e.preventDefault();
        console.log(values.name, values.url)
        
    }

    return (
        <>
            <h2 className="text-center py-2">Subir Capitulo</h2>
            <form className="container card card-body my-3" onClick={handleSumit}>
                <div className="form-group input-group my-2">
                    <div className="input-group-text bg-light">
                        <i className="material-icons" >insert_link</i>
                    </div>
                    <input type="text" className="form-control"
                        placeholder="URL" name="url" onChange={handdleInputChange}></input>
                </div>
                <div className="form-group input-group my-2">
                    <div className="input-group-text bg-light">
                        <i className="material-icons" >create</i>
                    </div>
                    <input type="text" className="form-control"
                        placeholder="Nombre" name="name" onChange={handdleInputChange}></input>
                </div>
                <button className="btn btn-primary btn-block my-2">Enviar</button>
            </form>
        </>
    )
}