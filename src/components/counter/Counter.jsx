import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import './counter.css'
import { useState } from 'react'

export default function Counter({stock , onAdd}) {
    const [counter, setCounter] = useState(1)

    const incrementar = () => {
        if (counter < stock){
            setCounter(counter+1)
        }
    }
    const disminuir = () => {
        if(counter > 1){
            setCounter(counter-1)
        }
    }
    const cambioManual = (e) => {
        let valor = Number(e.target.value)
        if( valor > stock){
            setCounter(stock)
        }else{
            setCounter(valor)
        }
    }

    return (
        <div className="divComprar">
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={disminuir}>-</Button>
                <input type="text" value={counter} onChange={cambioManual}/>
                <Button onClick={incrementar}>+</Button>
            </ButtonGroup>
            { stock === 0 ? 
                    <Button variant="contained" color="secondary" className="btnDetail" disabled>SIN STOCK</Button>
                    :
                    <Button variant="contained" color="secondary" className="btnDetail" onClick={onAdd}>AÑADIR AL CARRITO</Button>
            }
        </div>
    )
}
