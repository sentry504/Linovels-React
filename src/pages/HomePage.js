import SEO from '../components/SEO'
import './HomePage.css'

function HomePage() {
    return (
        <main className='cuerpo'>
            <div className='fondo'>
                <section>
                    <main className='uno opacity-1'> Hola</main>
                </section>
                <section className='dos'></section>
                <section className='tres opacity-2'></section>
            </div>
            <SEO title="Linovels-Home" description="Pagina de inicio de Linovels" keywords={"novelas,ligeras,anime,cuentos,ver"}></SEO>
        </main>
    )
}
export default HomePage