//Importacion del parametro establecido en la ruta de user/:id
//Importacion del parametro establecido en la ruta de user/:id
import { Container, Row, Col, Form } from 'react-bootstrap';
import Listado from '../components/Listado'
import SEO from '../components/SEO'
import Data from './seriesData.js'
import { useState } from 'react';

function SeriesPage() {
    const [values, SetValues] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        SetValues(value)
    };

    return (
        <div className='artistico-1'>
            <SEO
                title={`Linovels-Series`}
                description={`Linovels-Series`}
                keywords={"novelas,ligeras,anime,serie,capitulo,volumen,cuentos,ver"}>
            </SEO>
            <Row className='encabezado mx-0'>
                <Col>
                    <div>
                        <h1 className='text-center'>Linovels - Series</h1>
                    </div>
                </Col>
                <Col className='col-4'>
                    <Form className="d-flex pt-2">
                        <Form.Control
                            onChange={handleInputChange}
                            placeholder="Buscar serie"
                            aria-label="Search"
                        />
                    </Form>
                </Col>
            </Row>
            <Container fluid>
                <Row >
                    {Data && Data.map((dato, index) => {
                        return ((dato.serie.toLowerCase().includes(values.toLowerCase())) ? <Listado nombre={dato.serie} portada={dato.portada} key={index.toString()}></Listado> : false)
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default SeriesPage

//<Link to="Overlord">Overlord</Link