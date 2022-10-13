//Importacion del parametro establecido en la ruta de user/:id
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {BsCollectionPlay} from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import Data from './novelasData'

function NovelaPage() {
    const { id } = useParams()

    const filtrado=Data && Data.filter((filtro)=>filtro.novela===id)
    return (
        <div>
            {filtrado && filtrado.map((dato,index)=>{
                return(
                    <section className='seccion' key={index.toString()}>
                        <Card bg='dark'>
                        <h2 className='encabezado px-4 py-2' key={index}><strong>{dato.novela}</strong></h2>
                        <Card body>
                        <Container fluid>
                            <Row>
                                <Col sm="5" md="4" lg="3" xl="2">
                                <img className='portada' src={dato.portada} alt="" />
                                </Col>
                            </Row>
                        </Container>
                        </Card>
                        <h5 className='px-2 py-2' ><BsCollectionPlay size="20px"/><strong> VOLUMENES</strong> </h5>
                        </Card>
                        <ListGroup>
                            {dato.volumen.map((volumen,index) => {
                                return (
                                    <ListGroupItem className='bg-dark mb-1 px-2 py-2' key={index.toString()}>
                                        <Link className='link text-light' to={"./"+index}>{`Volumen ${index+1}`}</Link>
                                    </ListGroupItem>
                                )
                            })}
                        </ListGroup>
                    </section>
                )
            })}
        </div>
    )
}
export default NovelaPage
