import { Container, Card, Tabs, Tab, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Data from '../animes/animesData'

function Reproductor({ titulo, temporada, capitulo }) {
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

    function incrustado(vinculo) {
        return (<iframe
            className='video px-1'
            width="100%" height="450px"
            src={vinculo}
            title={titulo}
            frameborder="0"
            scrolling="no"
            allowfullscreen="">
        </iframe>)
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
                                            return (
                                                <Card bg='secondary'>
                                                    <Tabs>
                                                        <Tab eventKey="1" title="YourUpload">
                                                            {incrustado(Links.server1)}
                                                        </Tab>
                                                        <Tab eventKey="2" title="MEGA">
                                                            {incrustado(Links.server2)}
                                                        </Tab>
                                                        <Tab eventKey="3" title="Stape">
                                                            {incrustado(Links.server3)}
                                                        </Tab>
                                                        <Tab eventKey="4" title="Fembed">
                                                            {incrustado(Links.server4)}
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
                <Button variant="outline-secondary" className='px-4 fs-3 border border-1 border-secondary rounded-left' onClick={previoHandleClick}>Previo</Button>
                <Button variant="outline-secondary" className='px-3 fs-3 border border-1 border-secondary' onClick={indiceHandleClick}>Indice</Button>
                <Button variant="outline-secondary" className='px-2 fs-3 border border-1 border-secondary' onClick={siguienteHandleClick}>Siguiente</Button>
            </Container>
        </section>
    )
}
export default Reproductor