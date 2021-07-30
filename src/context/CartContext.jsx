import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getFirestore } from '../Firebase/client'

export const CartContext = createContext()

export default function CartContextComponent({children}) {

    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [dataFirestore, getDataFirestore] = useState([])

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

    useEffect( () => {
        async function getDBFirestore(){
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = await COLLECTION.get()
            let prods = RESPONSE.docs.map(element => {
                return { id: element.id, ...element.data()}
            });
            getDataFirestore(prods)
        }
        getDBFirestore();
    }, [])

    return (
        <CartContext.Provider value={{cart, cartQuantity, precioTotal, addItemToCart, cleanCart, removeItemToCart, dataFirestore}}>
            {children}
        </CartContext.Provider>
    )
}
