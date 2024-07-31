import React from "react";
import { Component } from "react";
import "./Styles/Specials.css";
import GreekSalad from "../Components/Assets/greek-salad.jpg"
import Bruschetta from "../Components/Assets/bruschetta.jpg"
import VegetarianZiti from "../Components/Assets/vegetarian-ziti.jpg"
import DeliveryIcon from "../Components/Assets/delivery-icon.jpg"

import { Link } from "react-router-dom";


const Specials = () =>{
    return (
        <div>
      <section className="specials">
        <div className="specials-header">
          <h1>This Week's Specials</h1>
          <Link to="/OrderOnline"><button className="btn">Online Menu</button></Link>
        </div>
      <div className="specials-container">
        <div className="greek-salad">
          <img src= {GreekSalad}></img>
          <h3>Greek Salad</h3>
          <p className="price">$12.99</p>
          <p>The famous Greek salad with crispy olives, peppers, cheese and fresh lemons.</p>
          <h3>Order for Delivery!</h3>
          <img src= {DeliveryIcon}></img>
        </div>
        <div className="bruschetta">
          <img src= {Bruschetta}></img>
          <h3>Bruschetta</h3>
          <p className="price">$7.99</p>
          <p>Our Bruchetta is made with grilled bread and brushed with olive oil, sea salt, and topped with fresh heirloom tomatoes.</p>
          <h3>Order for Delivery!</h3>
          <img src= {DeliveryIcon}></img>
        </div>
        <div className="veggie-ziti">
            <img src= {VegetarianZiti}></img>
            <h3>Vegetarian Ziti</h3>
            <p className="price">$11.99</p>
            <p>Freshly made ziti with a rich tomatoes and basil sauce topped with basil and our secret mediterranean spice blend.</p>
           <h3>Order for Delivery!</h3>
            <img src= {DeliveryIcon}></img>
        </div>
      </div>
    </section>
        </div>
    )
};
    export default Specials