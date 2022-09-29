//Importacion 
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { NavbarComponent } from "./components/Navbar.jsx"
import FooterPage from './pages/FooterPage'

//Importacion de paginas de la app
import HomePage from './pages/HomePage'
import Novelas from './pages/NovelasPage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'

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
                <Route path='/users' element= {<UsersPage/>} />
                <Route path='/user/:id' element= {<UserPage/>} />
                <Route path='*' element= {<NotFoundPage/>} />
            </Routes>
            <FooterPage />
        </BrowserRouter>
    )
}
export default App