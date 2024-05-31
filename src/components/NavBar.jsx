
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Carrito} from './Carrito/Carrito'
import { Link } from 'react-router-dom';

 export function NavBarr() {
  return (

        <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between"  data-bs-theme="dark">
            <div className='d-flex'>
                <Link to="/" className='ms-5 logo' >DadoMania</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Todos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Dies caras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Paquetes</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </div>
            <div className='me-5'>
                <Carrito/>
            </div>
        </Navbar>
  );
}
;