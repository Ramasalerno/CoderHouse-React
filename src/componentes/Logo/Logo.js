import React from 'react'
import magintech from "../imagenes/magintech.png"
import { Link } from 'react-router-dom'
    
export const Logo = () => {
    return (
        <div className="logo"> 
             <Link to ="/"><img src={magintech} alt="Logo de la pagina"></img></Link>
        </div>
    )
}
