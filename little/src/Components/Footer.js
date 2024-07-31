import React from "react";
import "../Components/Styles/Footer.css"
import { Outlet, Link } from "react-router-dom";
import Logo from "../Components/Assets/little-lemon-logo.jpg"

const Footer = () => {
    return(
<footer className="footer">
    <img src= {Logo} alt="Little Lemon Logo"></img>
    <nav>
        <ul className="footer-navigation">
            <p>Navigation</p>
                <Link to="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/menu">Menu</Link>
                <Link to ="/reservations">Reservations</Link>
                <Link to ="/orderOnline">Order Online</Link>
                <Link to ="/login">Login</Link>
        </ul>
        <ul className = "contact">
            <p>Contact</p>
                <li>3344 Numbers St. W Chicago, IL</li>
                <li>(123)-456-7890</li>
                <li>little.lemon@mail.com</li>
                <li>Facebook</li>
                <li>Instagram</li>
        </ul>
        <ul className= "hours">
            <p>Hours</p>
                <li>Mon - Wed: 11:00AM - 6:00PM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
        </ul>
        <ul>
            <p>© 2024 Little Lemon Ltd. All rights reserved</p>
        </ul>
    </nav>
    <Outlet></Outlet>
</footer>
    );
}

export default Footer