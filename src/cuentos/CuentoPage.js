import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Data from './cuentosData.js'

function CuentoPage() {
    const { id } = useParams()
    const filtrado = Data && Data.filter((filtro) => filtro.cuento === id)

    return (
        <div>
            {filtrado && filtrado.map((dato, index) => {
                return (
                    <section className='seccion' key={index.toString()}>
                        <Card bg='dark'>
                            <h2 className='encabezado px-4 py-2' key={index}><strong>{dato.cuento}</strong></h2>
                            <Card body>
                                <Container fluid>
                                    <Row>
                                        <Col sm="7" md="5" lg="3" xl="2">
                                            <img className='portada' src={dato.portada} alt="" />
                                        </Col>
                                        <Col md="7" lg="9" xl="10">
                                            <h4><strong>Sinopsis:</strong></h4>
                                            <p className='overflow-auto'>{dato['sinopsis']}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Card> 
                        <div style={{height:"100vh"}}>
                        <iframe src={`${dato.link}#toolbar=1`} width="100%" height="100%" title={dato.cuento.toString()}></iframe>
                        </div>
                    </section>
    )
})}
        </div >
    )
}
export default CuentoPage