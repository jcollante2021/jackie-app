import React from 'react'
import './navbar.css'
import logo from './img/logo_navbar_jackie.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Badge } from '@material-ui/core';

export default function Navbar() {
    
    const {cartQuantity} = useContext(CartContext)

    return (
        <div className="navbar">
            <Link to={`/`}><img src={logo} alt="logo no Jackie joyas"/></Link>
            <div className="listNav">
                <ul>
                    <li><Link to={`/`}>Inicio</Link></li>
                    <li><Link to={`/productos`}>Productos</Link></li>
                    <li><Link to={`/productos/categoria/1`}>Oro</Link></li>
                    <li><Link to={`/productos/categoria/2`}>Plata</Link></li>
                    <Link to={`/cart`}><li>
                        {cartQuantity === 0 ? 
                        <ShoppingCartIcon/>
                        :
                        <Badge badgeContent={cartQuantity} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                        }
                    </li></Link>
                </ul>
            </div>
        </div>
    )
}
