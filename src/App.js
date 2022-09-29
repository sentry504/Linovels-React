import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { NavbarComponent } from "./components/Navbar.jsx"
import HomePage from './pages/HomePage'
import Novelas from './pages/NovelasPage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'

import NotFoundPage from './pages/NotFoundPage'

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
        </BrowserRouter>
    )
}
export default App