import { Tab, Tabs } from 'react-bootstrap';
import Data from '../animes/animesData'

function Reproductor({ titulo, temporada, poster }) {
    const filtrado = Data && Data.filter((filtro) => filtro.anime === titulo)
    var Temporada= filtrado && filtrado.map((dato) => {return dato.temporada.filter((t)=>t===temporada) })
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            {
                Temporada && Temporada.map(capitulo=>{
                    return(
                        capitulo.map(temp=>{
                            temp.capitulos.map(servidor=>{
                                return(
                                    servidor.
                                )
                            })
                        })
                    )
                }
            }
        </Tabs>
    )
}
export default Reproductor