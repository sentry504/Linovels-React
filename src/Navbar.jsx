import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export function NavbarComponent(){
    return <Navbar bg='dark' variant='dark' sticky="top" expand="sm" collapseOnSelect>
    <Navbar.Brand>
        Linovels
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
        <Nav>
            <NavDropdown title='Productos'>
                <NavDropdown.Item href='#'> Tea</NavDropdown.Item>
                <NavDropdown.Item href='#'> Cafe</NavDropdown.Item>
                <NavDropdown.Item href='#'> Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#'> Promocion</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'>Blog</Nav.Link>
            <Nav.Link href='#'>About</Nav.Link>
            <Nav.Link href='#'>Contact</Nav.Link>l
        </Nav>
    </Navbar.Collapse>
</Navbar>
}