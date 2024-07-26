import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () =>{
    return(
<>
<nav className="navigation">
    <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
            <Link to ="/about">About</Link>
        </li>
        <li>
            <Link to ="/menu">Menu</Link>
        </li>
        <li>
            <Link to ="/reservations">Reservations</Link>
        </li>
        <li>
            <Link to ="/orderOnline">Order Online</Link>
        </li>
        <li>
            <Link to ="/login">Login</Link>
        </li>
    </ul>
</nav>
<Outlet></Outlet>
</>
    )
};

export default Nav;