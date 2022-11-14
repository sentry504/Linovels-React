import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProgressiveImg from './ProgresiveImg'
import cargandoImg from '../imagenes/cargando.gif'
import './ProgresiveImg.css'

function listado({nombre, portada}) {
    return (
        <Col className='py-2' xs="6" sm="4" md="3" lg="3" xl="2">
            <Card className="bg-secondary border border-1 border-secondary">
                <Link className='cont-imagen link' to={nombre}>
                    <ProgressiveImg className='imagen' src={portada} placeholderSrc={cargandoImg} altsrc={nombre} />
                    <Card.Title className='px-1 text-center text-white'>{nombre}</Card.Title>
                </Link>
            </Card>
        </Col>
    )   
}
export default listado