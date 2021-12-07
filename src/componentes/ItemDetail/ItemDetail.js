import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetailStyle.css'


export const ItemDetail = ({id, name, img, desc, price,stock}) => {
    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)
const handleAgregar = () => {

    if (cantidad > 0) {
        agregarAlCarrito ({
            id,
            name,
            price,
            stock,
            cantidad
        })
    }
}

    return (
        <div className="box1 ">
            <div>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
                <p>{desc}</p>
                <span className="price">Precio: USD $ {price} + IVA</span>
                <p>Stock actual: {stock} unidades</p>
                <Link to="/" className="btn btn-danger my-4">Volver al inicio</Link>
            </div>
                
                {
                    !isInCart(id)
                    ? 
                    <ItemCount 
                    stock={stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    onAdd={handleAgregar} />
                    :
                    <Link to="/cart" className="btn btn-success">Terminar compra</Link>
                }           
                

        </div>
    )
}