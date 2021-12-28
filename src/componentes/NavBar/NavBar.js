import React from 'react'
import './NavBar.css'
import { Logo } from '../Logo/Logo'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'

export const NavBar = () => {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Logo/>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <ul className="menu_items">
                                <li> <Link to ="/" className='hov'>Inicio</Link></li>
                                <li><Link to ="/productos/Laptop" className='hov'>Laptop</Link></li>
                                <li><Link to ="/productos/Pc Gamer" className='hov'>PC-Gamer</Link></li>
                                <li><Link to ="/productos/Workstation" className='hov'>Workstation</Link></li>
                                <li><Link to ="/productos/Display" className='hov'>Monitores</Link></li>
                             </ul>
    </Nav>
    <Nav>
    <CartWidget/>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}




