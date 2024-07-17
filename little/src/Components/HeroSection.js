import React from "react";
/*import "../components/styles/HeroSection.css";
import { NavLink } from 'react-router-dom';*/
import HeroImage from "../components/assets/chef-holding-tapas.jpg"

const HeroSection = () => {
    return (
            <section id="Hero-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediteranian resturant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a table</button>
                <img src={HeroImage}></img>
            </section>)}

export default HeroSection