import './saludo.css'
export function Saludo(){
    const user={
        id:0,
        nombre:"carlos"
    }
    return (<div className='saludo'>
        <h1>Hola!!! </h1>
        <h2>{JSON.stringify(user)}</h2>
        <h3>Id: {user.id}</h3>
        <h3>Nombre: {user.nombre}</h3>
    </div>);
}