import React from 'react'
import { Logo } from '../Logo/Logo'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <header>
                         <nav className="menu">
                             <ul className="menu_items">
                                <li> <Link to ="/">Inicio</Link></li>
                                <li><Link to ="/">¿Quienes somos?</Link></li>
                                <li><Link to ="/">Contacto</Link></li>
                             <CartWidget/>
                             </ul>
                             <Logo/>
                    </nav>
                </header>


        </div>
    )
}








