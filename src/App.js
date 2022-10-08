//Importacion 
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { NavbarComponent } from "./components/Navbar.jsx"

//Importacion de paginas de la app
import HomePage from './pages/HomePage'
import CuentosPage from './pages/CuentosPage'
import Novelas from './novelas/NovelasPage'
import NovelaPage from './novelas/NovelaPage'

//Seccion animes
import AnimesPage from './animes/AnimesPage'
import AnimePage from './animes/AnimePage'
import CapituloPage from './animes/CapituloPage'


import NotFoundPage from './pages/NotFoundPage'

//Estilos y temas de app
import 'bootswatch/dist/superhero/bootstrap.min.css'
import './css/styles.css'

function App(){

    return(
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path='/novelas' element= {<Novelas/>} />
                <Route path='/cuentos' element= {<CuentosPage/>} />
                <Route path='/novelas/:id' element= {<NovelaPage/>} />
                <Route path='/animes' element= {<AnimesPage/>} />
                <Route path='/animes/:id/' element= {<AnimePage/>} />
                <Route path='/animes/:id/:temp/:cap' element= {<CapituloPage/>} />
                <Route path='*' element= {<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App
//<FooterComponent />