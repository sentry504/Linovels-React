//Importacion del parametro establecido en la ruta de user/:id
import {Container,Accordion, Row, Col, Card} from 'react-bootstrap';
import {FcMenu} from 'react-icons/fc'
import {BsCollectionPlay, BsFillPlayFill} from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import Data from './animesData.js'

function AnimePage() {
    const { id } = useParams()

    const filtrado=Data && Data.filter((filtro)=>filtro.anime===id)
    return (
        <div>
            {filtrado && filtrado.map((dato,index)=>{
                return(
                    <section className='seccion'>
                        <Card bg='dark'>
                        <h2 className='encabezado px-4 py-2' key={index}><strong>{dato.anime}</strong></h2>
                        <Card body>
                        <Container fluid>
                            <Row>
                                <Col sm="5" md="4" lg="3" xl="2">
                                <img className='portada' src={dato.info} alt="login" />
                                </Col>
                                <Col sm="7" md="8" lg="9" xl="10">
                                    <h4><strong>Sinopsis:</strong></h4>
                                    <p>{dato['sinopsis:']}</p>
                                </Col>
                            </Row>
                        </Container>
                        </Card>
                        <h4 className='px-2 py-2' ><BsCollectionPlay size="30px"/><strong> Lista de Episodios</strong> </h4>
                        </Card>
                        <Accordion>
                            {dato.temporada.map((temporada,index) => {
                                return (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><FcMenu size="20px"></FcMenu>{"Temporada " + temporada.ID}</Accordion.Header>
                                        <Accordion.Body className='bg-secondary'>
                                            {temporada.capitulos.map(capitulo => {
                                                return (
                                                    <Row className='bg-dark mb-1 px-2 py-2'>
                                                        <Link className='link text-light' to={"./"+temporada.ID+"/"+capitulo.id}><BsFillPlayFill />{" Capitulo " + capitulo.id}</Link>
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
export default AnimePage
