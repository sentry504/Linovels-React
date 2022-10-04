//Importacion del parametro establecido en la ruta de user/:id
import {ListGroup,Container,Accordion, Row, Col, NavDropdown, NavLink} from 'react-bootstrap';
import {MdVideoLibrary} from 'react-icons/md'
import { useParams } from 'react-router-dom'
import Data from './animesData.json'

function AnimePage() {
    const { id } = useParams()
    const filtrado=Data && Data.filter((filtro)=>filtro.anime===id)
    return (
        <div>
            {filtrado && filtrado.map((dato,index)=>{
                return(
                    <section className='info'>
                        <h3 key={index}><strong>{dato.anime}</strong></h3>
                        <Container fluid>
                            <Row>
                                <Col sm="3" md="3" lg="2" xl="2">
                                    <img src="" alt="" />
                                </Col>
                                <Col sm="9" md="9" lg="10" xl="10">
                                    <strong>Sinopsis:</strong>
                                    <p>{dato['sinopsis:']}</p>
                                </Col>
                            </Row>
                        </Container>
                        <h4><MdVideoLibrary width="20px" height="20px" /><strong>Lista de Episodios</strong> </h4>
                        <Accordion>
                            {dato.temporada.map((temporada,index) => {
                                return (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>{"Temporada " + temporada.ID}</Accordion.Header>
                                        <Accordion.Body>
                                            {temporada.capitulos.map(capitulo => {
                                                return (
                                                    <Row>
                                                        <ListGroup.Item></ListGroup.Item>
                                                        <NavLink className="nav-item nav-link" to="">{"Capitulo " + capitulo.id}</NavLink>
                                                        <NavDropdown.Divider />
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
