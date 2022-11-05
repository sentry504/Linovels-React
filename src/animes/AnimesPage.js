//Importacion del parametro establecido en la ruta de user/:id
//Importacion del parametro establecido en la ruta de user/:id
import { Container, Row } from 'react-bootstrap';
import Listado from '../components/Listado'
import SEO from '../components/SEO'
import Data from './animesData.js'

function AnimesPage() {
    return (
        <div className='artistico-1'>
            <SEO
                title={`Linovels-Animes`}
                description={`Novela-Animes`}
                keywords={"novelas,ligeras,anime,cuentos,ver"}>
            </SEO>
            <h1 className='encabezado text-center'>Linovels - Animes</h1>
            <Container fluid>
                <Row>
                    {Data && Data.map((dato, index) => {
                        return (
                            <Listado nombre={dato.anime} portada={dato.portada} key={index.toString()}></Listado>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default AnimesPage

//<Link to="Overlord">Overlord</Link