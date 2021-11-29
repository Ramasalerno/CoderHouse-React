import './ItemsStyle.css'
import { Link } from 'react-router-dom'

export const Item = ({id, name, img, desc, price, category,stock}) => {

    return (
        <article key={id} className="card m-3" id="cuerpo">
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price} + IVA</p>
                <p className="card-text">{desc}</p>
                <p className="card-text">Categoria: {category}</p>
                <p classNAme= "card-text">Stock actual: {stock} unidades</p>
                
                <Link to ={`/detail/${id}`} className = "btn btn-primary">Mas Info</Link>
            </div>
        </article>
    )
}