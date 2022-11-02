//Importacion 
import { Routes, Route, HashRouter} from 'react-router-dom'
import { NavbarComponent } from "./components/Navbar.jsx"

//Importacion de paginas de la app
import HomePage from './pages/HomePage'
import CuentosPage from './cuentos/CuentosPage'
import CuentoPage from './cuentos/CuentoPage'
import Novelas from './novelas/NovelasPage'
import NovelaPage from './novelas/NovelaPage'
import Lector from './novelas/Lector'

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
        <HashRouter>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path='/novelas' element= {<Novelas/>} />
                <Route path='/novelas/:id' element= {<NovelaPage/>} />
                <Route path='/novelas/:id/:doc' element= {<Lector/>} />
                <Route path='/cuentos' element= {<CuentosPage/>} />
                <Route path='/cuentos/:id' element= {<CuentoPage/>} />
                <Route path='/cuentos/:id/:doc' component= {<Lector/>} />
                <Route path='/animes' element= {<AnimesPage/>} />
                <Route path='/animes/:id/' element= {<AnimePage/>} />
                <Route path='/animes/:id/:temp/:cap' element= {<CapituloPage/>} />
                <Route path='*' element= {<NotFoundPage/>} />
            </Routes>
        </HashRouter>
    )
}
export default App
//<FooterComponent />