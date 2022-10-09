import { Container, Card, Tabs, Tab, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Data from '../animes/animesData'
import NoEncontrado from '../animes/ImEx'


function Reproductor({ titulo, temporada, capitulo }) {
    const filtrado = Data && Data.filter((filtro) => filtro.anime === titulo)
    const previo = useNavigate()
    const indice = useNavigate()
    const siguiente = useNavigate()

    const previoHandleClick = () => {
        try{
            if (parseInt(capitulo) > 1) {
                previo(`/animes/${titulo}/${temporada}/${parseInt(capitulo) - 1}`, { state: true })
            }
        }catch(e){
            console.log("error previo")
        }
    }
    const siguienteHandleClick = () => {
        try{
            siguiente(`/animes/${titulo}/${temporada}/${parseInt(capitulo) + 1}`, { state: true })    
        }catch(e){
            console.log("error siguiente")
        }
        siguiente(`/animes/${titulo}/${temporada}/${parseInt(capitulo) + 1}`, { state: true })
    }
    const indiceHandleClick = () => {
        try{
            indice(`/animes/${titulo}`, { state: true })
        }catch(e){
            console.log("error indice")
        }
    }

    function incrustado(vinculo) {
        return (<iframe
            className='video px-1'
            width="100%" height="500px"
            src={(vinculo!=="")?vinculo:"https://embed.lottiefiles.com/animation/119776"}
            title={titulo}
            frameborder="0"
            scrolling="no"
            allowfullscreen=""
            >
        </iframe>)
    }

    return (
        <section>
            {
                filtrado.map((dato) => {
                    return (
                        dato.temporada.map((dato) => {
                            return (
                                (dato.ID === temporada) ? dato.capitulos.map((dato) => {
                                    return (
                                        (dato.id === parseInt(capitulo)) ? dato.Links.map((Links, index) => {
                                            return (
                                                <Card bg='secondary' key={index.toString()}>
                                                    <Tabs>
                                                        <Tab eventKey="1" title="server 1">
                                                            {incrustado(Links.server1)}
                                                        </Tab>
                                                        <Tab eventKey="2" title="server 2"> 
                                                            {incrustado(Links.server2)}
                                                        </Tab>
                                                        <Tab eventKey="3" title="server 3">
                                                            {incrustado(Links.server3)}
                                                        </Tab>
                                                        <Tab eventKey="4" title="server 4">
                                                            {incrustado(Links.server4)}
                                                        </Tab>
                                                    </Tabs>
                                                </Card>
                                            )
                                        }) :null
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
