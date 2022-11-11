import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import {BiHomeHeart, BiBookHeart, BiMoviePlay} from 'react-icons/bi'
import {MdOutlineHistoryEdu} from 'react-icons/md'
import {NavLink} from 'react-router-dom'

import './Navbar.css'
import EnojoAnime from '../imagenes/enojo-anime.ico'

export function NavbarComponent() {
    return (
        <Navbar className='bg-styled' variant='dark' sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <strong className= 'navbar-brand fs-2 px-0'><img src={EnojoAnime} width="35" alt=""></img> Linovels</strong>
            </Navbar.Brand>
            <Navbar.Toggle className='off-canvas border border-1 border-secondary mx-2' />
            <Navbar.Collapse >
                <Nav>
                    <NavLink className="nav-link px-3" to="./"><BiHomeHeart size='23px'/> Inicio</NavLink>
                    <NavLink className="nav-link px-3" to='./novelas'><BiBookHeart size='23px'/> Novelas</NavLink>
                    <NavLink className="nav-link px-3" to='../animes'><BiMoviePlay size='23px'/> Animes</NavLink>
                    <NavLink className="nav-link px-3" to='./cuentos'><MdOutlineHistoryEdu size='23px'/> Cuentos</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}