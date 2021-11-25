import React, {useState} from 'react'
import {Button} from "react-bootstrap"

export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState (0);

    const aumentar = () => {
        if (stock>counter) {
        setCounter(counter+1);
        }
        else {
            alert ("Cantidad maxima de stock seleccionada")
        }
    }

    const reducir = () => {
        if(counter>1) {
        setCounter(counter-1);
        }
        else {
            alert("No se puede reducir mas")
        }
    }

    const respuesta = () => {
        alert (`Usted agrego ${counter} unidades`)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <div>
            <h3>Cantidad a comprar</h3>
            <Button variant="danger"  onClick={reducir}>-</Button>
            <Button variant="primary" onClick={aumentar}>+</Button>
            <hr/>
            <button type="button" class="btn btn-success" onClick={respuesta}>Agregar al carrito</button>
            </div>
        </div>
    )
}
