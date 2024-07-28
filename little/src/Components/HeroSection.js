import React from "react";
import "../Components/Styles/HeroSection.css";
import HeroImage from "../Components/Assets/chef-holding-tapas.jpg"

const HeroSection = () => {
    return (
            <section id="Hero-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediteranian resturant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a table</button>
                <img src={HeroImage} alt="Chef's hands are holding 3 tapas on a black stone plate."></img>
            </section>)}

export default HeroSection