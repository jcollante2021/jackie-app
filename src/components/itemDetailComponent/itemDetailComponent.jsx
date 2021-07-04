import React from 'react'
import './itemDetailComponent.css'
import Counter from '../counter/Counter'
import { Button } from '@material-ui/core'

export default function ItemDetailComponent({itemSelect}) {
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
                <Counter stock={itemSelect.stock}/>
                { itemSelect.stock === 0 ? 
                    <Button variant="contained" color="secondary" className="btnDetail" disabled>SIN STOCK</Button>
                    :
                    <Button variant="contained" color="secondary" className="btnDetail">AÑADIR AL CARRITO</Button>
                }
            </div>            
        </div>
    )
}