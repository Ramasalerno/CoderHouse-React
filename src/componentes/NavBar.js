import magintech from "./imagenes/magintech.png"

const NavBar = () => {

    return ( 

            <div>
                <header>
                         <nav className="menu">
                             <ul className="menu_items">
                                <li>Inicio</li>
                                <li>Galeria</li>
                                <li>¿Quienes somos?</li>
                                <li>Contacto</li>
                             </ul>
                             <div className="logo">
                             <img src={magintech} alt="Logo de la pagina"></img>
                             </div>
                    </nav>
                </header>

            </div>
    )
}

export default NavBar