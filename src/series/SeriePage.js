//Importacion del parametro establecido en la ruta de user/:id
import { Container, Accordion, Row, Col, Card } from 'react-bootstrap';
import { FcMenu } from 'react-icons/fc'
import { BsCollectionPlay, BsFillPlayFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import Data from './seriesData.js'

function SeriePage() {
    const { id } = useParams()

    const filtrado = Data && Data.filter((filtro) => filtro.serie === id)
    return (
        <div>
            {filtrado && filtrado.map((dato, index) => {
                return (
                    <section className='seccion' key={index.toString()}>
                        <SEO
                            title={`Linovels-Series-${dato.serie}`}
                            description={`Novela-Series-${dato.serie}`}
                            keywords={"novelas,ligeras,serie,anime,cuentos,ver"}>
                        </SEO>
                        <Card bg='dark'>
                            <h2 className='encabezado px-4 py-2' key={index}><strong>{dato.serie}</strong></h2>
                            <Card body>
                                <Container fluid>
                                    <Row>
                                        <Col sm="5" md="4" lg="3" xl="2">
                                            <img className='portada' src={dato.info} alt="" />
                                        </Col>
                                        <Col sm="7" md="8" lg="9" xl="10">
                                            <h4><strong>Sinopsis:</strong></h4>
                                            <p>{dato['sinopsis']}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                            <h4 className='px-2 py-2' ><BsCollectionPlay size="30px" /><strong> Lista de Episodios</strong> </h4>
                        </Card>
                        <Accordion defaultActiveKey='0'>
                            {dato.temporada.map((temporada, index) => {
                                return (
                                    <Accordion.Item className='border border-secondary' eventKey={index.toString()} key={index.toString()}>
                                        <Accordion.Header><FcMenu size="20px"></FcMenu>{temporada.ID}</Accordion.Header>
                                        <Accordion.Body className='bg-secondary'>
                                            {temporada.capitulos.map((capitulo, index) => {
                                                return (
                                                    <Row className='bg-dark mb-1 px-2 py-2' key={index.toString()}>
                                                        <Link className='link text-light' to={"./" + capitulo.id}><BsFillPlayFill />{" Capitulo " + capitulo.id}</Link>
                                                    </Row>
                                                )
                                            })}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                    </section>
                )
            })}
        </div>
    )
}
export default SeriePage
