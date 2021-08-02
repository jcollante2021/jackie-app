import { Button, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../../components/ItemCart/ItemCart'
import { CartContext } from '../../context/CartContext'
import './cartContainer.css'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { Alert } from '@material-ui/lab'

export default function CartContainer() {
    const {cart} = useContext(CartContext)
    const {cartQuantity} = useContext(CartContext)
    const {precioTotal} = useContext(CartContext)
    const {cleanCart} = useContext(CartContext)
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true);
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className="cartContainer">
            {cartQuantity > 0 ?
                    cart.map(productos => {
                        return <ItemCart productos={productos} key={productos.id} handleClick={handleClick}/>
                        })
                    :
                    <div className="noHayProductos">
                        <h1>No hay productos en tu Carrito</h1>
                        <Link to={`/productos`}><Button variant="contained" color="primary">BUSCAR PRODUCTOS</Button></Link>
                    </div>                         
            }
            {cartQuantity > 0 ?
                <Button variant="contained" color="primary" onClick={() => {cleanCart()}} style={{backgroundColor: "red", width: 200}}>VACIAR CARRITO<RemoveShoppingCartIcon/></Button>
                :
                <Button variant="contained" color="primary" style={{marginTop: 20, width: 200}} disabled>VACIAR CARRITO <RemoveShoppingCartIcon/></Button>
            }
            <h3 className="textoPrecio">Subtotal: ${precioTotal}</h3>
            <h1 className="textoPrecio"> <span className="ivaPrecio">(+IVA21%)</span> Precio Total: ${precioTotal + (precioTotal * 0.21)}</h1>
            {cartQuantity > 0 ?
                <Link to={`/cart/checkout`}><Button variant="contained" color="primary" style={{backgroundColor: "green"}}>CONTINUAR COMPRA</Button></Link>
                :
                <Button variant="contained" color="primary" disabled>CONTINUAR COMPRA</Button>
            }
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Se eliminó el Producto correctamente
                </Alert>
            </Snackbar> 
        </div>
    )
}
