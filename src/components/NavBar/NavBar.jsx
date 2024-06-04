import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Carrito} from "../Carrito/Carrito"
import { Link } from 'react-router-dom';
import "./NavBar.css"

 export function NavBarr() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between" data-bs-theme="dark">
          <div className='d-flex'>
            <Link to="/" className='ms-5 logo'>DadoMania</Link>
            <DropdownButton
              as={ButtonGroup}
              id="dropdown-button-drop"
              size="lg"
              title="Catalogo"
              variant='secondly'
            >
              <NavDropdown.Item as={Link} to="/">Todos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="category/dice">Dados</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="category/mini">Minis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="category/decor">Decors</NavDropdown.Item>
            </DropdownButton>
          </div>
          <div className='me-5'>
            <Carrito />
          </div>
        </Navbar>
      );
}
;