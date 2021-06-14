import React from 'react'
import './navbar.css'
import logo from './img/logo_navbar_jackie.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo no Jackie joyas"/>
            <div className="listNav">
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Sobre Nosotros</li>
                    <li>Ayuda</li>
                    <li><ShoppingCartIcon/></li>
                </ul>
            </div>
        </div>
    )
}
