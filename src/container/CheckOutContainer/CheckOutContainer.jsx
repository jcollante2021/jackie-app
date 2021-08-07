import React, { useContext } from 'react'
import { useState } from 'react'
import CheckOut from '../../components/checkOut/CheckOut';
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../Firebase/client';

export default function CheckOutContainer() {
    const {cart} = useContext(CartContext)
    const {precioTotal} = useContext(CartContext)
    const {cleanCart} = useContext(CartContext)
    const [nombre, setNombre] = useState()
    const [mail, setMail] = useState()
    const [telefono, setTelefono] = useState()
    const [direccion, setDireccion] = useState()
    const [localidad, setLocalidad] = useState()
    const [idDePedido, setIdDePedido] = useState()
    const [statusMP, setStatusMP] = useState(false)

    async function generarLinkDePago() {
        const productsToMP = cart.map((element) => {
            let nuevoElemento = {
                title: element.producto.title,
                description: element.producto.description,
                picture_url: element.producto.pictureURL,
                category_id: element.producto.categoria,
                quantity: Number(element.cantidad),
                currency_id: "ARS",
                unit_price: Number(element.producto.price),
            };
            return nuevoElemento;
        });
        const response = await fetch(
            "https://api.mercadopago.com/checkout/preferences",
            {
                method: "POST",
                headers: {
                Authorization:
                    "Bearer TEST-4524169472049363-080220-ce197191c193c0b87a4dee2a2587ce8c-19147385",
                },
                body: JSON.stringify({
                items: productsToMP,
                }),
            }
        );
        const data = await response.json();
        window.open(data.init_point);
        setStatusMP(true);
    }


    function crearNuevaOrden(){
        const nuevaOrden = {buyer: {nombre, mail, telefono, direccion, localidad}, item: cart, price: precioTotal };
        const DB = getFirestore();
        DB.collection("pedidos").add(nuevaOrden).then(({ id }) => {setIdDePedido(id)});
        cleanCart();
    }
    

    return (
        <div>
            {idDePedido ? 
                <div>
                    <h1 style={{marginBottom: 50, textAlign:"center"}}>¡¡¡Felicitaciones {nombre}!!! <br /> el pedido se realizo con Éxito <br /> <br />
                    Tu N° de Orden es: <br /> {idDePedido}</h1>
                    <p style={{marginBottom: 150, textAlign:"center"}}>Enviamos un Mail a <b>{mail}</b> con toda la información necesaria</p>
                </div>
                :    
                <CheckOut mercadoPago={generarLinkDePago} statusMercadoPago={statusMP} funcion={crearNuevaOrden} nombre={setNombre} mail={setMail} telefono={setTelefono} direccion={setDireccion} localidad={setLocalidad}/>
            }
        </div>
    )
}
