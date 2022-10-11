import { Container, Row } from 'react-bootstrap';
import Listado from '../components/Listado'
import Data from './novelasData'

function AnimesPage() {

    return (
        <div className='artistico-1'>
            <h1 className='encabezado text-center'>Linovels - Novelas</h1>
            <Container fluid>
                <Row>
                    {Data && Data.map((dato, index) => {
                        return (
                            <Listado nombre={dato.novela} portada={dato.portada} key={index.toString()}></Listado>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default AnimesPage