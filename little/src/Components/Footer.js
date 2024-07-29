import React from "react";
import "../Components/Styles/Footer.css"
import Logo from "../Components/Assets/little-lemon-logo.jpg"

const Footer = () => {
    return(
<footer>
    <img src= {Logo} alt="Little Lemon Logo"></img>
    <nav>
        <ul name= "footer-navigation">
            <h1>Navigation</h1>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
        </ul>
        <ul name = "contact">
            <h1>Contact</h1>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
        </ul>
        <ul name= "links">
            <h1>Links</h1>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
        </ul>
    </nav>
</footer>
    );
}

export default Footer