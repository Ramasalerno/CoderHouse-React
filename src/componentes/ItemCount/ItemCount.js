import {Button} from "react-bootstrap"

export const ItemCount = ({stock, setCantidad, cantidad, onAdd} ) => {
    
    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <h2>{cantidad}</h2>
            <div>
            <h3>Cantidad a comprar</h3>
            <Button variant="danger"  onClick={handleRestar}>-</Button>
            <Button variant="primary" onClick={handleSumar}>+</Button>
            <hr/>
            <button type="button" class="btn btn-success" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}
