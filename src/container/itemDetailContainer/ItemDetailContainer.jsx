import React, { useContext } from 'react'
import ItemDetailComponent from '../../components/itemDetailComponent/itemDetailComponent'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress'
import './itemDetailContainer.css'
import { CartContext } from '../../context/CartContext';

export default function ItemDetailContainer() {
    const { product_id } = useParams();
    const { dataFirestore } = useContext(CartContext)
    const [itemSelect, setItemSelect] = useState ({})
    const [progress, setProgress] = useState(false)

    useEffect(() => {
        const getItems = async () => {
            let prods = dataFirestore.find((p) => p.id === product_id);
            setTimeout( () => {
                setItemSelect(prods);
                setProgress(true)
            }, 800)
        };
    getItems();
    }, [product_id, dataFirestore]);

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
