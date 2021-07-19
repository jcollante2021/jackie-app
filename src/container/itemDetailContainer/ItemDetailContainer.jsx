import React from 'react'
import ItemDetailComponent from '../../components/itemDetailComponent/itemDetailComponent'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress'
import './itemDetailContainer.css'
import { getFirestore } from '../../Firebase/client';

export default function ItemDetailContainer() {
    const { product_id } = useParams();
    const [itemSelect, setItemSelect] = useState ({})
    const [progress, setProgress] = useState(false)

    useEffect(() => {
        const getItems = async () => {
            setProgress(false)
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = await COLLECTION.doc(`${product_id}`).get()
            let prods = RESPONSE.data()
            setTimeout( () => {
                setItemSelect(prods);
                setProgress(true)
            }, 800)
        };
    getItems();
    }, [product_id]);

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
