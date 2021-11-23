import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { pedirDatos } from '../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'


export const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const {catId} = useParams ()
    
    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                if (!catId) {
                    setProductos(resp)
                } else {
                    setProductos(resp.filter(prod => prod.category === catId))
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])

    return (
        <Container>
             <>
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <ItemList items={productos}/>
            }
        </>
        </Container>
        
    )
}
