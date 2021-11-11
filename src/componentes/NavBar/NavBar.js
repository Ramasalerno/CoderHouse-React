import React from 'react'
import { Logo } from '../Logo/Logo'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div>
            <header>
                         <nav className="menu">
                             <ul className="menu_items">
                                <li><a href ="index.js">Inicio</a></li>
                                <li><a href ="index.js">Galeria</a></li>
                                <li><a href ="index.js">¿Quienes somos?</a></li>
                                <li><a href ="index.js">Contacto</a></li>
                             <CartWidget/>
                             </ul>
                             <Logo/>
                    </nav>
                </header>


        </div>
    )
}








