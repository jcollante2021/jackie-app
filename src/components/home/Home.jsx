import React from 'react'
/* import ListContainer from '../ListContainer/ListContainer' */
import './home.css'
import ItemDetailContainer from '../../container/itemDetailContainer/itemDetailContainer'

export default function Home() {

    return (
        <div className="homeProduct">
            {/* <div className="barTitle">
                <h3>Lista de Productos</h3>
            </div>
            <ListContainer/> */}
            <ItemDetailContainer/>
        </div>
    )
}
