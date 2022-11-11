import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Listado from '../components/Listado'
import Data from './novelasData'
import SEO from '../components/SEO'
import { useState } from 'react';
function NovelasPage() {
    const initialStateValues = {
        name: ""
    };

    const [values, SetValues] = useState(initialStateValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetValues({ ...values, [name]: value })
        console.log(name)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values.name)

    }

    return (
        <div className='artistico-1'>
            <SEO
                title="Linovels-Novelas"
                description=""
                keywords={"novelas,ligeras,anime,cuentos,ver,completa,capitulo,"}>
            </SEO>
            <Row>
                <Col className='encabezado'>
                    <div className=''>
                        <h1 className='text-center'>Linovels - Novelas</h1>
                    </div>
                </Col>
                <Col className='encabezado col-4'>
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <Form.Control
                            onClick={handleInputChange}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" type='sumit'>Buscar</Button>
                    </Form>
                </Col>
            </Row>
            <Container fluid>
                <Row>
                    {Data && Data.map((dato, index) => {
                        return (dato.novela.toLowerCase().includes(values.name)) ? <Listado nombre={dato.novela} portada={dato.portada} key={index.toString()}></Listado> : false;
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default NovelasPage