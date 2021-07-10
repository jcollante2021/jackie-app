import React, { useState } from 'react'
import './itemDetailComponent.css'
import Counter from '../counter/Counter'
import { Button } from '@material-ui/core'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function ItemDetailComponent({itemSelect}) {
    const {addItemToCart} = useContext(CartContext)
    const [terminarCompra, setTerminarCompra] = useState(false)

    function onAdd(counter) {
        addItemToCart(itemSelect, counter)
        setTerminarCompra(true);
    }

    return (
        <div className="detailComponent">
            <div className="imgDetail">
                <img src={itemSelect.pictureFull} alt="imagen del producto" />
            </div>
            <div className="detail">
                <h1>{itemSelect.title}</h1>
                <p>{itemSelect.description}</p>
                <p>Stock: {itemSelect.stock}</p>
                <h3>${itemSelect.price}</h3>
                { terminarCompra ? 
                <div className="btnTerminarCompra">
                    <Button variant="contained" color="primary" className="btnTerminarCompra">TERMINAR COMPRA</Button>
                </div>
                    :
                    <Counter stock={itemSelect.stock} onAdd={onAdd}/>

                }
                
            </div>            
        </div>
    )
}