import {useParams} from 'react-router-dom'
import IrA from '../components/IrA'

function CapituloPage(){
    const {id}= useParams()
    return(
        <h2>{id} </h2>
    )
}
export default CapituloPage