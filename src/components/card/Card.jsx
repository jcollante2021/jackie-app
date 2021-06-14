import React from 'react'
import { Button } from '@material-ui/core'
import './card.css'

export default function Card() {
    return (
        <div className="cardProduct">
            <h2>Nombre de Producto</h2>
            <div className="imgCardProduct"></div>
            <p>Descripcion del producto que vas a comprar</p>
            <h3>$$$</h3>
            <Button variant="contained" color="secondary">Comprar</Button>
        </div>
    )
}
