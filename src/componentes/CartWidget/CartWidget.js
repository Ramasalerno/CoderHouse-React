import {BsFillCartCheckFill} from 'react-icons/bs'
import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import './estiloCartWidget.css'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    
    const {carrito, totalCantidad} = useContext(CartContext)

    return (
        <div className={carrito.length === 0 ? 'ocultar' : ''}>
            <Link to ="/cart"> <BsFillCartCheckFill className="carrito"/> </Link>
            <span className="numCount">{totalCantidad()}</span>
        </div>
    )
}
