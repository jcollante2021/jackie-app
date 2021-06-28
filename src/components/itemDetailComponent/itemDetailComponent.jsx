import React from 'react'
import './itemDetailComponent.css'
import Counter from '../counter/Counter'

export default function ItemDetailComponent({productos}) {
    return (
        <div className="detailComponent">
            <div className="imgDetail">
                <img src={productos.pictureFull} alt="imagen del producto" />
            </div>
            <div className="detail">
                <h1>{productos.title}</h1>
                <p>{productos.description}</p>
                <p>Stock: {productos.stock}</p>
                <h3>${productos.price}</h3>
                <Counter stock={productos.stock}/>
            </div>            
        </div>
    )
}