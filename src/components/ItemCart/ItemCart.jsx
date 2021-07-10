import React from 'react'
import './itemCart.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ItemCart({productos, handleClick}) {
    const {removeItemToCart} = useContext(CartContext)

    return (
        <div className="itemCartDetail">
            <img src={productos.producto.pictureURL} alt="imagen del producto" />
            <div className="itemCartDetailText">
                <h2>{productos.producto.title}</h2>
                <p>{productos.producto.description}</p>
                <h3>Precio por Unidad: ${productos.producto.price}</h3>
                <h4>Cantidad: X {productos.cantidad}</h4>
            </div>
            <div className="deleteIcon">
                <DeleteForeverIcon fontSize="large" onClick={() => {removeItemToCart(productos.producto.id); handleClick()}}/>
            </div>
        </div>
    )
}
