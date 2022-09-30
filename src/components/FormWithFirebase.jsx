import { useState } from "react";

export default function FormWithFirebaseComponent() {

    const initialStateValues= {
        url:"",
        name:"",
        description:"",
    };

    const [values, SetValues]= useState(initialStateValues);

    const handdleInputChange= (e)=>{
        const {name, value}= e.target;
        SetValues({...values, [name]: value})
    };

    const handleSumit= (e)=>{
        e.preventDefault();
        console.log(values) 
    }

    return (
        <>
            <h2 className="text-center py-5">Envio de formulario</h2>
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
                        placeholder="Website" name="name" onChange={handdleInputChange}></input>
                </div>
                <div className="form-group my-2">
                    <textarea name="description" rows="3" className="form-control" onChange={handdleInputChange}></textarea>
                </div>
                <button className="btn btn-primary btn-block my-2">Enviar</button>
            </form>
        </>
    )
}