//Importacion 
import { Routes, Route, HashRouter} from 'react-router-dom'
import { NavbarComponent } from "./components/Navbar.jsx"
import { lazy, Suspense } from 'react'

//Estilos y temas de app
import 'bootswatch/dist/superhero/bootstrap.min.css'
import './css/styles.css'

//Importacion de paginas de la app
const HomePage= lazy(()=>import('./pages/HomePage'));
const CuentosPage= lazy(()=>import('./cuentos/CuentosPage'));
const CuentoPage= lazy(()=>import('./cuentos/CuentoPage'));
const Novelas= lazy(()=>import('./novelas/NovelasPage'));
const NovelaPage= lazy(()=>import('./novelas/NovelaPage'));
const Lector= lazy(()=>import('./novelas/Lector'));

//Seccion series
const SeriesPage= lazy(()=>import('./series/SeriesPage'));
const SeriePage= lazy(()=>import('./series/SeriePage'));
const CapituloPage= lazy(()=>import('./series/CapituloPage'));

const NotFoundPage= lazy(()=>import('./pages/NotFoundPage'));

function App(){
    return(
        <HashRouter>
            <NavbarComponent />
            <Suspense fallback={
                <div className="container text-center position-absolute top-50 start-50 translate-middle" style={{width:"min-content"}}>
                <lottie-player
                    src="https://assets9.lottiefiles.com/packages/lf20_6pgBO2srnh.json"
                    mode="bounce"
                    background="transparent"
                    speed="1"
                    style={{width:"600px",height:"600px"}}
                    loop
                    autoplay>
                </lottie-player>
            </div>
            }>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path='/novelas' element= {<Novelas/>} />
                <Route path='/novelas/:id' element= {<NovelaPage/>} />
                <Route path='/novelas/:id/:doc' element= {<Lector/>} />
                <Route path='/cuentos' element= {<CuentosPage/>} />
                <Route path='/cuentos/:id' element= {<CuentoPage/>} />
                <Route path='/series' element= {<SeriesPage/>} />
                <Route path='/series/:id/' element= {<SeriePage/>} />
                <Route path='/series/:id/:cap' element= {<CapituloPage/>} />
                <Route path='*' element= {<NotFoundPage/>} />
            </Routes>
            </Suspense>
        </HashRouter>
    )
}
export default App
//<FooterComponent />