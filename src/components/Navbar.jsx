import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export function NavbarComponent() {
    return (
        <Navbar bg='dark' variant='dark' sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <strong classname= 'navbar-brand'>Linovels</strong>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <NavLink className="nav-link" to="./home">Inicio</NavLink>
                    <NavLink className="nav-link" to='./novelas'>Novelas</NavLink>
                    <NavDropdown title='Animes'>
                        <NavLink className="nav-item nav-link" to='./emision'> Emision</NavLink>
                        <NavLink className="nav-item nav-link" to='./listado'> Listado</NavLink>
                        <NavDropdown.Divider />
                        <NavLink className="link nav-link" to='./proximos'> Proximos</NavLink>
                    </NavDropdown>
                    <NavLink className="nav-link" to='./cuentos'>Cuentos</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}