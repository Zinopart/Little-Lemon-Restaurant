import React from "react";
import "../Components/Styles/HeroSection.css";
import HeroImage from "../Components/Assets/chef-holding-tapas.jpg"

import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div>
            <section className="hero-section">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediteranian resturant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/Reservations"><button className="btn">Reserve a table</button></Link>
                </div>
                <div className="image-box">
                    <img src={HeroImage} alt="Chef's hands are holding 3 tapas on a black stone plate."></img>
                </div>
            </section>
        </div>
        )}

export default HeroSection