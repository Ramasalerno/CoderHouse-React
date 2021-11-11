import React from 'react'
import { Container } from 'react-bootstrap'

export const ItemListContainer = ( {greeting} ) => {
    return (
        <Container className="">
            <h2 className="text-center"> {greeting} </h2>
        </Container>
        
    )
}
