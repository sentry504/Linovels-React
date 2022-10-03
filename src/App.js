//Importacion 
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { NavbarComponent } from "./components/Navbar.jsx"
import FooterComponent from './components/FooterComponent'

//Importacion de paginas de la app
import HomePage from './pages/HomePage'
import Novelas from './pages/NovelasPage'
import CuentosPage from './pages/CuentosPage'
import NovelaPage from './pages/NovelaPage'

import NotFoundPage from './pages/NotFoundPage'

//Estilos y temas de app
import 'bootswatch/dist/superhero/bootstrap.min.css'
import './css/styles.css'

function App(){

    return(
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path='/home' element= {<HomePage/>} />
                <Route path='/novelas' element= {<Novelas/>} />
                <Route path='/cuentos' element= {<CuentosPage/>} />
                <Route path='/novela/:id' element= {<NovelaPage/>} />
                <Route path='*' element= {<NotFoundPage/>} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    )
}
export default App