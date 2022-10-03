//Importacion del parametro establecido en la ruta de user/:id
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import animes from './animesData'

function AnimePage(){
    const {id}= useParams()
    const data =JSON.parse(animes)
    
    console.log(data)
    return(
        <>
        <h2>{id} </h2>
        <Link to="1">Overlord</Link>
        <p>que pes</p>
        </>
    )
}
export default AnimePage