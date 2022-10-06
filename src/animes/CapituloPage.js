import { useParams } from 'react-router-dom'
import Player from '../components/Reproductor'
import Comments from '../components/comentarios'

function CapituloPage() {
    const { id, t, cap} = useParams()
    return (
        <div>
            <section className='encabezado bg-secondary px-4'>
                <h2>{id + "  " + cap}</h2>
            </section>
            <section className='video'>
                <Player titulo={id} temporada={t} capitulo={cap} poster=""></Player>
            </section>
            <section className='Comentarios'>
                
            </section>
        </div>
    )
}
export default CapituloPage