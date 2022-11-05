import { useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import Comments from '../components/comentarios'
import Data from './novelasData'

function Lector() {
    const { id, doc } = useParams()
    const filtrado = Data && Data.filter((filtro) => filtro.novela === id)

    return (
        <div>
            {filtrado && filtrado.map((novela, index) => {
                const pdf = novela.volumen && novela.volumen.filter((filtro, index) => index === parseInt(doc - 1))

                return (
                    <div key={index.toString()}>
                        {
                            pdf && pdf.map((dato, index) => {
                                console.log(dato)
                                return (
                                    <div style={{ height: "100vh" }} key={index.toString()}>
                                        <SEO
                                            title={`Linovels-${novela.novela}-${dato.title}`}
                                            description={`${novela.novela}-${dato.title}`}
                                            keywords={"novelas,ligeras,anime,cuentos,ver"}>
                                        </SEO>
                                        <iframe src={`${dato.link}#toolbar=1`} width="100%" height="100%" title={dato.title} placeholder={dato.title}></iframe>
                                    </div>
                                )
                            })
                        }
                        <section className='Comentarios py-2' style={{ color: '#eee' }}>
                            <Comments fullUrl={document.URL} id={id+doc} />
                        </section>
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