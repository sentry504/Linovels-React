import { useParams,useSearchParams } from 'react-router-dom'
import Player from '../components/Reproductor'
import Comments from '../components/comentarios'

function CapituloPage() {
    const { id, t, cap} = useParams()
    const query=useSearchParams()
    console.log(query)
    return (
        <>
            <section className='encabezado'>
                <h2>{id + "  " + cap}</h2>
            </section>
            <section className='video'>
                <Player titulo={id} temporada={t} poster=""></Player>
            </section>
            <section className='Comentarios'>
                <Comments fullUrl={document.URL} id={id} />
            </section>
        </>
    )
}
export default CapituloPage