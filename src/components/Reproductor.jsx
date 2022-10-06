import { Card, Row, Col } from 'react-bootstrap';
import Data from '../animes/animesData'

function Reproductor({ titulo, temporada, capitulo, poster }) {
    const filtrado = Data && Data.filter((filtro) => filtro.anime === titulo)
    function servidor(link){
        return link
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
                                        (dato.id === parseInt(capitulo)) ? dato.Links.map((Links) => {
                                            return (
                                                <Card bg='dark'>
                                                    <Row className='container fs-4 text-center'>
                                                        <Col onClick={servidor(Links.server1)} className='bg-secondary mx-1'>
                                                            
                                                        </Col>
                                                        <Col onClick={servidor(Links.server2)} className='bg-secondary mx-1'>
                                                            ad
                                                        </Col>
                                                        <Col onClick={servidor(Links.server3)} className='bg-secondary mx-1'>
                                                            ad
                                                        </Col>
                                                        <Col onClick={servidor(Links.server4)} className='bg-secondary mx-1'>
                                                            ad
                                                        </Col>
                                                    </Row>
                                                    <iframe width="100%" height="300px" src={Links.server1} title={titulo}></iframe>
                                                    <Row className='bg-secondary py-2 px-3'>
                                                    <h4 ><strong> Lista de Episodios</strong> </h4>
                                                    </Row>
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
        </section>
    )
}
export default Reproductor