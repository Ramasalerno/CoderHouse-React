import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import './cartStyle.css'

export const CartItem = ({name, price, cantidad, id}) => {

    const {removerDelCarrito} = useContext(CartContext)
    return (
        <div className='box3'>
            <h2>{name}</h2>
            <p className='price'>Precio: USD $ {price} + IVA</p>
            <p>Cantidad: {cantidad}</p>
            <div>
                <button
                    className="btn btn-danger but"
                    onClick={() => { removerDelCarrito(id) }}
                >
                    <BsFillTrashFill/>
                </button>
            </div>
        </div>
    )
}