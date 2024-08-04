import React from "react";
import "./Styles/Header.css";
import Logo from "../Components/Assets/little-lemon-logo.jpg"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
    <div className="header-container">
        <header className="header">
            <NavLink to = "/">
                <div className="logo">
                <img src = { Logo } alt = "Little Lemon logo" />
                </div>
            </NavLink>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                     <li>
                        <NavLink to ="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/reservations">Reservations</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/orderOnline">Order Online</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    )
};

export default Header