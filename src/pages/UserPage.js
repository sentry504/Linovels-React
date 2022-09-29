//Importacion del parametro establecido en la ruta de user/:id
import {useParams} from 'react-router-dom'

function UserPage(){
    const {id}= useParams()
    return <h2>Usuario: {id}</h2>
}
export default UserPage

