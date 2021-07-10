import React, { createContext } from 'react'
import { useState } from 'react'

export const CartContext = createContext()

export default function CartContextComponent({children}) {

    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState()
    const [precioTotal, setPrecioTotal] = useState()

    function updateCart(cart){
        let total = 0
        let cantidadTotal = 0
        cart.forEach((element) => {
            cantidadTotal += element.cantidad;
            total += element.cantidad * element.producto.price;
            });
            setCartQuantity(cantidadTotal);
            setPrecioTotal(total);
    }
    
    function addItemToCart(item, cantidad) {
        let existeEnCart = cart.findIndex(element => element.producto.id === item.id)
        if(existeEnCart >= 0){
            cart[existeEnCart].cantidad += cantidad
        } else {
            cart.push({producto: item, cantidad: cantidad});
        }
        setCart(cart)
        updateCart(cart)
        console.log(cart)
        
    }

    function removeItemToCart (id){
        let buscaItem = cart.findIndex(element => element.producto.id === id)
        if(buscaItem !== -1){
            cart.splice(buscaItem, 1)
        }
        setCart(cart)
        updateCart(cart)
    }

    function cleanCart() {
        setCart([])
        updateCart(cart)
    }

    return (
        <CartContext.Provider value={{cartQuantity, precioTotal, addItemToCart, cleanCart, removeItemToCart}}>
            {children}
        </CartContext.Provider>
    )
}
