import React from 'react'
import ItemCard from '../../components/itemCard/ItemCard'
import { useEffect, useState } from 'react'
import './listContainer.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function ListContainer() {
    const { cat } = useParams()
    const { dataFirestore } = useContext(CartContext)
    const [productos, setProductos] = useState([])
    
    useEffect( () => {
        function getDBFirestore(){
            if(cat){
                let aux
                aux = dataFirestore.filter( e => e.categoria === parseInt(cat))
                setProductos(aux)
            }else{
                setProductos(dataFirestore)
            }
        }
        getDBFirestore();
    }, [cat, dataFirestore])

    return (
        <div className="ListProduct">
            <div className="barTitle">
                <h3>Lista de Productos</h3>
            </div>
            {productos.map(productos => {
                return <ItemCard productos={productos} key={productos.id}/>
            })
            }
        </div>
    )
}
