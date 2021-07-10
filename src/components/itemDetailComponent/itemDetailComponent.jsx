import React, { useState } from 'react'
import './itemDetailComponent.css'
import Counter from '../counter/Counter'
import { Button, Snackbar } from '@material-ui/core'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Alert } from '@material-ui/lab'
import { Link } from 'react-router-dom'

export default function ItemDetailComponent({itemSelect}) {
    const {addItemToCart} = useContext(CartContext)
    const [terminarCompra, setTerminarCompra] = useState(false)
    const [open, setOpen] = useState(false)
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function onAdd(counter) {
        addItemToCart(itemSelect, counter)
        setTerminarCompra(true);
        setOpen(true);
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
                <div>
                    <div className="btnTerminarCompra">
                    <Link to={`/cart`}><Button variant="contained" color="primary" className="btnTerminarCompra">IR AL CARRITO</Button></Link>
                    </div>
                    <Link to={`/productos`}><Button variant="contained" color="primary">VER MÁS PRODUCTOS</Button></Link>
                </div>
                :
                <Counter stock={itemSelect.stock} onAdd={onAdd}/>

                }                
            </div>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Se agregó el Producto correctamente
                </Alert>
            </Snackbar>            
        </div>
    )
}