import React, { useEffect, useState } from 'react'
import ListContainer from '../ListContainer/ListContainer'
import './home.css'

export default function Home() {

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
        <div className="homeProduct">
            <div className="barTitle">
                <h3>Lista de Productos</h3>
            </div>
            <ListContainer productos={productos}/>
        </div>
    )
}
