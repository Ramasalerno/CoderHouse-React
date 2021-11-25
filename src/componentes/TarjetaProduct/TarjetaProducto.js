import React from 'react'
import {Card} from "react-bootstrap"
import { ItemCount } from '../ItemCount/ItemCount'

export const TarjetaProducto = ({img, name}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <div className="text-center">
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ItemCount stock ="15"/>
                    <hr/>
                </div>
            </Card>
        </div>
    )
}
