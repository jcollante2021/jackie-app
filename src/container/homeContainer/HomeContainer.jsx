import React from 'react'
import ListContainer from '../ListContainer/ListContainer'
import './homeContainer.css'

export default function Home() {

    return (
        <div className="homeProduct">
            <div className="boxGif">
                <img src="./img/gif1.gif" alt="gif" />
                <img src="./img/gif2.gif" alt="" />
                <img src="./img/gif3.gif" alt="" />
            </div>
            <ListContainer/>
            <img className="footer" src="./img/footer.gif" alt="" />
        </div>
    )
}
