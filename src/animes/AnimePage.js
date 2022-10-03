//Importacion del parametro establecido en la ruta de user/:id
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function AnimePage() {
    const { id } = useParams()
    return (
        <div>
            <h2>{id} </h2>
            <Link to="1">Overlord</Link><br />
        </div>
    )
}
export default AnimePage
