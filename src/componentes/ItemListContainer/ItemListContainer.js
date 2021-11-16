import React from 'react'
import { Container } from 'react-bootstrap'
import { TarjetaProducto } from '../TarjetaProduct/TarjetaProducto'
import dell from "../imagenes/laptop.png"

export const ItemListContainer = ( {greeting} ) => {
    return (
        <Container>
            <h2 className="text-center"> {greeting} </h2>
            <TarjetaProducto img={dell} name="Laptop Dell"/>
        </Container>
        
    )
}
