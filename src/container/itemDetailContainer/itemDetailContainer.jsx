import React from 'react'
import ItemDetailComponent from '../../components/itemDetailComponent/itemDetailComponent'
import { useEffect, useState } from 'react'

export default function ItemDetailContainer() {

    const [productos, setProductos] = useState([])

    async function fetchData(){
        const response = await fetch("./json/products.json")
        const data = await response.json()
        return data
    }
    
    useEffect( () => {
        const getData = async () => {
            let data = await fetchData()
            setProductos(data[1])
        }

        getData();
        
    }, [])

    return (
        <>
            <ItemDetailComponent productos={productos} key={productos.id}/>
        </>
    )
}
