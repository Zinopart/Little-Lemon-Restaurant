import React from "react";
import { Component } from "react";
import "./Styles/Specials.css";
import GreekSalad from "../Components/Assets/greek-salad.jpg"
import Bruschetta from "../Components/Assets/bruschetta.jpg"
import VegetarianZiti from "../Components/Assets/vegetarian-ziti.jpg"
import DeliveryIcon from "../Components/Assets/delivery-icon.jpg"


function Specials() {
    return (
        <div>
            <section id="Specials">
        <h2>Specials</h2>
        <button>Online Menu</button>
        <div>
        <img src= {GreekSalad}></img>
          <h3>Greek Salad</h3>
          <p>$12.99</p>
          <p>The famous Greek salad with crispy olives, peppers, cheese and fresh lemons.</p>
          <p>Order for Delivery!</p>
          <img src= {DeliveryIcon}></img>
        </div>
        <div>
        <img src= {Bruschetta}></img>
          <h3>Bruschetta</h3>
          <p>$7.99</p>
          <p>Our Bruchetta is made with grilled bread and brushed with olive oil, sea salt, and topped with fresh heirloom tomatoes.</p>
          <p>Order for Delivery!</p>
          <img src= {DeliveryIcon}></img>
        </div>
        <div>
            <img src= {VegetarianZiti}></img>
          <h3>Vegetarian Ziti</h3>
          <p>$11.99</p>
          <p>Freshly made ziti with a rich tomatoes and basil sauce topped with basil and our secret mediterranean spice blend.</p>
          <p>Order for Delivery!</p>
          <img src= {DeliveryIcon}></img>
        </div>
    </section>
        </div>
    )
};
    
    export default Specials