import React from "react";
import "../Components/Styles/Footer.css"
import Logo from "../Components/Assets/little-lemon-logo.jpg"

const Footer = () => {
    return(
<footer className="footer">
    <img src= {Logo} alt="Little Lemon Logo"></img>
    <nav>
        <ul className="footer-navigation">
            <p>Navigation</p>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
        </ul>
        <ul className = "contact">
            <p>Contact</p>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
        </ul>
        <ul className= "links">
            <p>Links</p>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
        </ul>
    </nav>
</footer>
    );
}

export default Footer