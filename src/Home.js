import { Saludo } from "./Saludo"
import { Product } from "./Product"
import Boton from "./Boton"
import { VscBug } from 'react-icons/vsc'

var texto = '';
//<Saludo/> --> SCT (Self Clousing Tags)
function Home(){
    return <section>
        <Saludo />
        <Product id={1} />
        <Product id={2} />
        <Product id={3} />
        <Product id={4} />
        <Product id={5} />
        <br></br>
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(texto)
        }}>
            <VscBug />
            <input onChange={(e) => { texto = e.target.value }}></input>
            <Boton />
        </form>
    </section>
}
export default Home