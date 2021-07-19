import React from 'react'
import ItemCard from '../../components/itemCard/ItemCard'
import { useEffect, useState } from 'react'
import './listContainer.css'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase/client'

export default function ListContainer() {
    const { cat } = useParams()
    const [productos, setProductos] = useState([])
    
    useEffect( () => {
        async function getDBFirestore(){
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = await COLLECTION.get()
            let prods = RESPONSE.docs.map(element => {
                return { id: element.id, ...element.data()}
            });
            if(cat){
                let aux
                aux = prods.filter( e => e.categoria === parseInt(cat))
                setProductos(aux)
            }else{
                setProductos(prods)
            }
        }
        getDBFirestore();
        /* fetch('/json/products.json')
        .then(res => res.json())
        .then(res => {
            if(cat){
                let aux
                aux = res.filter( e => e.categoria === parseInt(cat))
                setProductos(aux)
            }else{
                setProductos(res)
            }
        }) */
    }, [cat])

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
