import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../context/CartContext'
import { db } from '../firebase/config'
import { validarDatos } from '../helpers/vaidarDatos'
import { collection, Timestamp, writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'
import './Checkout.css'

export const Checkout = () => {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validarDatos(values)) { return }

        const orden = {
            buyer: {...values},
            items: carrito,
            total: totalCompra(),
            date: Timestamp.fromDate( new Date() )
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = carrito.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {    
            addDoc(ordersRef, orden)
                .then((res) => {
                    batch.commit()   
                    Swal.fire({
                        icon: 'success',
                        title: 'Su orden ha sido registrada',
                        text: `Su número de orden es: ${res.id}`                        
                    })
                    vaciarCarrito()
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No hay stock de los siguientes productos:',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }

    }


    return (

        <>
            {carrito.length === 0 
                ? <Navigate to="/"/>
                :
                    <div className="my-5 formulario">
                        <h2>Coloque sus datos para finalizar la compra!</h2>
                        <hr/>

                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleInputChange}
                                name="nombre"
                                value={values.nombre}
                                className="textForm"
                                type="text"
                                placeholder="Nombre"
                                
                            />
                            {values.nombre.length < 4 && <small></small>}

                            <input
                                onChange={handleInputChange}
                                name="apellido"
                                value={values.apellido}
                                className="textForm"
                                type="text"
                                placeholder="Apellido"
                            />
                            {values.apellido.length < 4 && <small></small>}

                            <input
                                onChange={handleInputChange}
                                name="email"
                                value={values.email}
                                className="textForm"
                                type="email"
                                placeholder="E-mail"
                                autoComplete='off'
                            />
                            {values.email.length < 4 && <small></small>}

                            <input
                                onChange={handleInputChange}
                                name="emailConfirm"
                                value={values.emailConfirm}
                                className="textForm" 
                                type="email"
                                placeholder="Repita su e-mail"
                                autoComplete='off'
                            />
                            {values.emailConfirm !== values.email && <small></small>}

                            <button type="submit" className="butn">Enviar</button>
                        </form>
                    </div>
            }
        </>
    )
}

/* {values.emailConfirm !== values.email && <small>Email no coincide</small>} */