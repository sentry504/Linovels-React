import SEO from '../components/SEO'
import './HomePage.css'

function HomePage() {
    return (
        <main className='cuerpo'>
            <SEO
                title="Linovels-Home"
                description="Pagina de inicio de Linovels"
                keywords={"novelas,ligeras,anime,cuentos,ver"}>
            </SEO>
            <h1 className='text-center m-2 py-3 encabezado'>Colecciones de Novelas, animes y cuentos</h1>
            <div className='artistico-1 container'>
                <section className='card mt-2 p-2 text-center border border-2 border-secondary'>
                    <div className='dos anime'></div>
                    <h2 className='encabezado'>Disfruta de selecciones cuidadosas de los mejores animes.</h2>
                </section>
                <section className='card mt-2 p-2  text-center border border-2 border-secondary'>
                    <div className='dos lightnovels end-50'></div>
                    <h2 className='encabezado'>Lee y descarga obras que puedes considerar como joyas entre las novelas ligeras/web.</h2>
                </section>
                <section className='card mt-2 p-2  text-center border border-2 border-secondary'>
                    <div className='dos cuentos'></div>
                    <h2 className='encabezado'>Encuentra cuentos populares de Oriente.</h2>
                </section>
            </div>
        </main>
    )
}
export default HomePage