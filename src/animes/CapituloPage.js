import { useParams } from 'react-router-dom'
import Player from '../components/Reproductor'
import Comments from '../components/comentarios'
import React from 'react'

function CapituloPage() {
    const { id, temp, cap} = useParams()
    return (
        <div>
            <section className='encabezado bg-secondary py-2 px-4 rounded-bottom'>
                <h2>{id + " - temporada " + temp + " - capitulo " + cap}</h2>
            </section>
            <section className='video'>
                <Player titulo={id} temporada={temp} capitulo={cap}></Player>
            </section>
            <section className='Comentarios'>
                <Comments fullUrl={document.URL} id={id}/>
            </section>
        </div>
    )
}
export default CapituloPage
//