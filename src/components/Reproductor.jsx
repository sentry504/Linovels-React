import { Container, Card, Tabs, Tab } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Data from '../animes/animesData'

function Reproductor({ titulo, temporada, capitulo, poster }) {
    const filtrado = Data && Data.filter((filtro) => filtro.anime === titulo)
    const previo = useNavigate()
    const indice = useNavigate()
    const siguiente = useNavigate()

    const previoHandleClick = () => {
        if (parseInt(capitulo) > 1) {
            previo(`/animes/${titulo}/${temporada}/${parseInt(capitulo) - 1}`, { state: true })
        }
    }
    const siguienteHandleClick = () => {
        siguiente(`/animes/${titulo}/${temporada}/${parseInt(capitulo) + 1}`, { state: true })
    }
    const indiceHandleClick = () => {
        indice(`/animes/${titulo}`, { state: true })
    }

    return (
        <section className='fondo'>
            
            {
                filtrado.map((dato) => {
                    return (
                        dato.temporada.map((dato) => {
                            return (
                                (dato.ID === temporada) ? dato.capitulos.map((dato) => {
                                    return (
                                        (dato.id === parseInt(capitulo)) ? dato.Links.map((Links) => {
                                            console.log("servidor.:", Links.server1)
                                            return (
                                                <Card bg='secondary'>
                                                    <Tabs>
                                                        <Tab eventKey="1" title="YourUpload">
                                                            <iframe
                                                                className='video px-1'
                                                                width="100%" height="450px"
                                                                src={Links.server1}
                                                                title={titulo}
                                                                frameborder="0"
                                                                scrolling="no"
                                                                allowfullscreen="">
                                                            </iframe>
                                                        </Tab>
                                                        <Tab eventKey="2" title="MEGA">
                                                            <iframe
                                                                className='video px-1'
                                                                width="100%" height="450px"
                                                                src={Links.server2}
                                                                title={titulo}
                                                                frameborder="0"
                                                                scrolling="no"
                                                                allowfullscreen="">
                                                            </iframe>
                                                        </Tab>
                                                        <Tab eventKey="3" title="SB">
                                                            <iframe
                                                                className='video px-1'
                                                                width="100%" height="450px"
                                                                src={Links.server3}
                                                                title={titulo}
                                                                frameborder="0"
                                                                scrolling="no"
                                                                allowfullscreen="">
                                                            </iframe>
                                                        </Tab>
                                                        <Tab eventKey="4" title="Fembed">
                                                            <iframe
                                                                className='video px-1'
                                                                width="100%" height="450px"
                                                                src={Links.server4}
                                                                title={titulo}
                                                                frameborder="0"
                                                                scrolling="no"
                                                                allowfullscreen="">
                                                            </iframe>
                                                        </Tab>
                                                    </Tabs>
                                                </Card>
                                            )
                                        }) : null
                                    )
                                }) : null
                            )
                        })
                    )
                })
            }
            <Container className='text-center py-2'>
                <button className='px-4 mx-3 border border-1 border-secondary encabezado' onClick={previoHandleClick}>Previo</button>
                <button className='px-3 mx-3 border border-1 border-secondary encabezado' onClick={indiceHandleClick}>Indice</button>
                <button className='px-2 mx-3 border border-1 border-secondary encabezado' onClick={siguienteHandleClick}>Siguiente</button>
            </Container>
        </section>
    )
}
export default Reproductor