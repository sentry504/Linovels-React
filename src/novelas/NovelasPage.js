import { Container, Row } from 'react-bootstrap';
import Listado from '../components/Listado'
import Data from '../animes/animesData.js'

function AnimesPage() {

    return (
        <div>
            <h1 className='text-center'>Linovels - Novelas</h1>
            <Container fluid>
                <Row>
                    {Data && Data.map((dato) => {
                        return (
                            <Listado nombre={dato.anime} portada={dato.portada}></Listado>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default AnimesPage