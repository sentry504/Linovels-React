//Importacion del parametro establecido en la ruta de user/:id
//Importacion del parametro establecido en la ruta de user/:id
import { Container, Row, Col, Form } from 'react-bootstrap';
import Listado from '../components/Listado'
import SEO from '../components/SEO'
import Data from './animesData.js'
import { useState } from 'react';

function AnimesPage() {
    const [values, SetValues] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        SetValues(value)
    };

    return (
        <div className='artistico-1'>
            <SEO
                title={`Linovels-Animes`}
                description={`Novela-Animes`}
                keywords={"novelas,ligeras,anime,cuentos,ver"}>
            </SEO>
            <Row className='encabezado mx-0'>
                <Col>
                    <div>
                        <h1 className='text-center'>Linovels - Animes</h1>
                    </div>
                </Col>
                <Col className='col-4'>
                    <Form className="d-flex pt-2">
                        <Form.Control
                            onChange={handleInputChange}
                            placeholder="Buscar anime"
                            aria-label="Search"
                        />
                    </Form>
                </Col>
            </Row>
            <Container fluid>
                <Row>
                    {Data && Data.map((dato, index) => {
                        return ((dato.anime.toLowerCase().includes(values.toLowerCase())) ? <Listado nombre={dato.anime} portada={dato.portada} key={index.toString()}></Listado> : false)
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default AnimesPage

//<Link to="Overlord">Overlord</Link