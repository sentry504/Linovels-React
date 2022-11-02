import { useParams } from 'react-router-dom'
import Data from './novelasData'
function Lector() {
    const { id, doc } = useParams()
    const filtrado = Data && Data.filter((filtro) => filtro.novela === id)

    return (
        <div>
            {filtrado && filtrado.map((dato, index) => {
                const pdf = dato.volumen && dato.volumen.filter((filtro,index) => index === parseInt(doc-1))
                
                return(
                    <div key={index.toString()}>
                        {
                            pdf && pdf.map((dato, index) => {
                                console.log(dato)
                                return (
                                    <div style={{height:"100vh"}} key={index.toString()}>
                                        <iframe src={`${dato.link}#toolbar=1`} width="100%" height="100%" title={dato.link.toString()}></iframe>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}
export default Lector
/* 
<div style={{height:"100vh"}}>
                                <iframe src={`${0}#toolbar=1`} width="100%" height="100%" title={id.toString()}></iframe>
                            </div>
*/