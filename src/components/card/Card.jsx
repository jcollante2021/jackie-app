import React from 'react'
import './card.css'
import Counter from '../counter/Counter'

export default function Card() {
    let stock = 5
    return (
        <div className="cardProduct">
            <h2>Nombre de Producto</h2>
            <div className="imgCardProduct"></div>
            <p>Descripción del producto que vas a comprar</p>
            <p>Stock: {stock}</p>
            <h3>$$$</h3>
            <Counter stock={stock}/>
        </div>
    )
}
