import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetailStyle.css'


export const ItemDetail = ({id, name, img, desc, price,stock}) => {
const [cantidad, setCantidad] = useState(0)
const [agregado, setAgregado] = useState(false)


const handleAgregar = () => {

    if (cantidad > 0) {
        console.log('Item agregado:', {
            id,
            name,
            price,
            cantidad,
        })
        setAgregado(true)
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
            </div>
                
                {
                    !agregado
                    ? 
                    <ItemCount 
                    stock={stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    onAdd={handleAgregar} />
                    :
                    <Link to="/CartView" className="btn btn-success">Terminar compra</Link>
                }
                
                

        </div>
    )
}