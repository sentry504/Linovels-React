//Importacion del parametro establecido en la ruta de user/:id
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import animes from './animesData.json'

function AnimePage(){
    const {id}= useParams()
    //const data =animes.
    const Animes= animes.map(record=>{
        return record
    })
    
    console.log(Animes)

    return(
        <>
        <h2>{id} </h2>
        <Link to="1">Overlord</Link><br/>
        
        </>
    )
}
export default AnimePage

/*<>{animes && animes.map( record=>{
    record.volumen.capitulos.forEach(element => {
        return(<ol>{element}</ol>)
    });
})}</>*/