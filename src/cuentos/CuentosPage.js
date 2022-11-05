import { Container, Row } from 'react-bootstrap';
import Listado from '../components/Listado'
import Data from './cuentosData'

function CuentosPage() {
    return (
        <div className='artistico-1'>
            <h1 className='encabezado text-center'>Linovels - Cuentos</h1>
            <Container fluid>
                <Row>
                    {Data && Data.map((dato, index) => {
                        return (
                            <Listado key={index} indice={index} nombre={dato.cuento} portada={dato.portada}></Listado>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default CuentosPage
//https://drive.google.com/file/d/1UjbfYPekGEue-AyHaELppiCbMeVtPYMK/view?usp=sharing