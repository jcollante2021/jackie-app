import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useContext } from 'react'
import { useState } from 'react'
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


    function crearNuevaOrden(){
        const nuevaOrden = {buyer: {nombre, mail, telefono, direccion, localidad}, item: cart, price: precioTotal };
        const DB = getFirestore();
        DB.collection("pedidos").add(nuevaOrden).then(({ id }) => {setIdDePedido(id)});
        cleanCart();
    }
    

    return (
        <div style={{marginLeft: '33%', marginRight: '33%',}}>
            {idDePedido ? 
                <h1>¡¡¡Felicitaciones!!! <br /> el pedido se realizo con Éxito <br /> <br />
                Tu N° de Orden es: <br /> {idDePedido}</h1>
                :    
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Nombre y apellido" variant="outlined" style={{margin: 15 , width: 500}} onInput={(e) => {setNombre(e.target.value)}}/><br />
                    <TextField type="email" id="outlined-full-width" label="E-Mail" variant="outlined" style={{margin: 15, width: 500}} onInput={(e) => {setMail(e.target.value)}}/> <br />
                    <TextField type="text" id="outlined-basic" label="Teléfono" variant="outlined" style={{margin: 15}} onInput={(e) => {setTelefono(e.target.value)}}/>
                    <TextField id="outlined-basic" label="Dirección" variant="outlined" style={{margin: 15 , width: 500}} onInput={(e) => {setDireccion(e.target.value)}}/><br />
                    <TextField id="outlined-basic" label="Localidad" variant="outlined" style={{margin: 15 , width: 500}} onInput={(e) => {setLocalidad(e.target.value)}}/><br />
                    <FormControl component="fieldset" style={{margin: 15 , width: 500}}>
                        <FormLabel component="legend">Tipo de Envío</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1">
                            <FormControlLabel value="female" control={<Radio/>} label="Retiro por Sucursal ($0)" />
                            <FormControlLabel value="male" control={<Radio />} label="Envío OCA ($280)" />
                            <FormControlLabel value="other" control={<Radio />} label="Envío Express ($530)" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" color="secondary" onClick={crearNuevaOrden} style={{marginBottom: 50}}>
                        FINALIZAR COMPRA
                    </Button>
                </form>
            }
        </div>
    )
}
