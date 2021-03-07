import React from 'react';
import Close from "./svg/times-circle-regular.svg";
import Menu from "./svg/ellipsis-v-solid.svg";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <h1><Link to="/products">CAMERAS</Link></h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Login / Register</Link></li>
                <li>
                    <img src={Close} alt="" width="30" className="menu"/>
                </li>
            </ul>
            <div className="menu">
                <img src={Menu} alt="" width="10"/>
            </div>
        </header>
    )
}