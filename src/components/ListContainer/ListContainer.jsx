import React from 'react'
import Card from '../card/Card'
import { useEffect, useState } from 'react'

export default function ListContainer() {

    const [productos, setProductos] = useState([])

    async function fetchData(){
        const response = await fetch("./json/products.json")
        const data = await response.json()
        return data
    }
    
    useEffect( () => {
        const getData = async () => {
            let data = await fetchData()
            setProductos(data)
        }

        getData();
        
    }, [])

    return (
        <>
            {productos.map(productos => {
                return <Card productos={productos} key={productos.id}/>
            })
            }
        </>
    )
}
