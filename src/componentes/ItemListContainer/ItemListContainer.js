import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const {catId} = useParams ()
    
    useEffect(() => {
        
        setLoading(true)
        
        //primero la ref al database, segundo el nombre de la conexion de la bd en firebase
        const productosRef = collection (db, 'productos')

        const q = catId ? query(productosRef, where('category', '==', catId)) : productosRef

        getDocs (q)
        .then ((collection)=> {
            const items = collection.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            }))
            console.log(items)
            setProductos(items)
        })
        .finally(()=> {
            setLoading(false)
        })

    }, [catId])

    return (
        <Container>
             <>
            {
                loading 
                    ? <Loader/>
                    : <ItemList items={productos}/>
            }
        </>
        </Container>
        
    )
}