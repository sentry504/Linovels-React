import { Container, Row, Col, Form } from 'react-bootstrap';
import Listado from '../components/Listado'
import Data from './novelasData'
import SEO from '../components/SEO'
import { useState } from 'react';
function NovelasPage() {

    const [values, SetValues] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        SetValues(value)
    };

    return (
        <div className='artistico-1'>
            <SEO
                title="Linovels-Novelas"
                description="Linovels-Novelas"
                keywords={"novelas,ligeras,anime,cuentos,ver,completa,capitulo,"}>
            </SEO>
            <Row className='encabezado mx-0'>
                <Col className='col-8'>
                    <div>
                        <h1 className='text-center'>Linovels - Novelas</h1>
                    </div>
                </Col>
                <Col>
                    <Form className="d-flex pt-2">
                        <Form.Control
                            onChange={handleInputChange}
                            placeholder="Buscar novela"
                            aria-label="Search"
                        />
                    </Form>
                </Col>
            </Row>
            <Container fluid>
                <Row>
                    {Data && Data.map((dato, index) => {
                        return ((dato.novela.toLowerCase().includes(values.toLowerCase())) ? <Listado nombre={dato.novela} portada={dato.portada} key={index.toString()}></Listado> : false)
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default NovelasPage