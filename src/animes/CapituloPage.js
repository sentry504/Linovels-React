import { useParams } from 'react-router-dom'
import Player from '../components/Reproductor'
import Comments from '../components/comentarios'
import SEO from '../components/SEO'
import React from 'react'

function CapituloPage() {
    const { id, temp, cap } = useParams()
    return (
        <div>
            <SEO
                title={`Linovels-Animes-${id}-${temp}-${cap}`}
                description={`Novela-Animes-${id}-${temp}-${cap}`}
                keywords={"novelas,ligeras,anime,cuentos,ver"}>
            </SEO>
            <section className='encabezado bg-secondary py-2 px-4 rounded-bottom'>
                <h2>{id + " - " + temp + " - " + cap}</h2>
            </section>
            <section className='video'>
                <Player titulo={id} temporada={temp} capitulo={cap}></Player>
            </section>
            <section className='Comentarios' style={{color:'#eee'}}>
                <Comments fullUrl={document.URL} id={id + temp + cap} />
            </section>
        </div>
    )
}
export default CapituloPage