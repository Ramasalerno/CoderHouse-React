import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetailStyle.css'

export const ItemDetail = ({name, img, desc, price,stock}) => {

    return (
        <div className="box1 ">
            <div>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
                <p>{desc}</p>
                <span className="price">Precio: USD $ {price} + IVA</span>
                <p>Stock actual: {stock} unidades</p>
            </div>
                <ItemCount stock={stock}/>
                

        </div>
    )
}