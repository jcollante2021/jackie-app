import React from 'react'
import './card.css'
import Counter from '../counter/Counter'

export default function Card({productos}) {
    return (
        <div className="cardProduct">
            <h2>{productos.title}</h2>
            <img src={productos.pictureURL} alt="imagen del producto" />
            <p>{productos.description}</p>
            <p>Stock: {productos.stock}</p>
            <h3>${productos.price}</h3>
            <Counter stock={productos.stock}/>
        </div>
    )
}
