import React from 'react'
import ItemDetailComponent from '../../components/itemDetailComponent/itemDetailComponent'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress'
import './itemDetailContainer.css'

export default function ItemDetailContainer() {
    const { product_id } = useParams(); 
    const [listProductos, setListProductos] = useState([])
    const [itemSelect, setItemSelect] = useState ({})
    const [progress, setProgress] = useState(false)

    useEffect(() => {
        const getItems = async () => {
            setProgress(false)
            let aux;
            if (listProductos.length === 0) {
                fetch('../json/products.json')
                .then(res => res.json())
                .then(res => setListProductos(res))
                }
            aux = listProductos.find((p) => p.id === parseInt(product_id));
            setTimeout( () => {
                setItemSelect(aux);
                setProgress(true)
            }, 800)
        };
    getItems();
    }, [product_id, listProductos]);

    return (
        <>
            
            {progress ?
                (itemSelect ?
                    <ItemDetailComponent itemSelect={itemSelect} />
                    : 
                    <h1>Elemento no encontrado</h1>
                )
                :   <div className="spinnerStyle">
                        <CircularProgress color="secondary"/>
                    </div>
            }
            
        </>
    )
}
