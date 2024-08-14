import React from "react";
import "../Components/Styles/Body.css"

import LemonRatingFour from "../Components/Assets/lemon-rating-4.png"
import LemonRatingThreePointFive from "../Components/Assets/lemon-rating-3.5.png"
import LemonRatingFive from "../Components/Assets/lemon-rating-5.png"

import Marcus from "../Components/Assets/marcus.jpg"
import Mosalowa from "../Components/Assets/mosalowa.jpg"
import Ann from "../Components/Assets/ann.jpg"
import Dimitri from "../Components/Assets/dimitri.jpg"

import AdrianAndMario from "../Components/Assets/adrian-and-mario.png"

const Body = () => {
    return(
<body>
    <div className="testimonials-container">
        <div className="testimonials-header">
            <h1>Testimonials</h1>
        </div>
    <section className="testimonials">
        <div className="review-container">
            <div className="rating-container">
                <h2>Rating</h2>
                <img src={LemonRatingFour}></img>
            </div>
            <div className="image container">
                <img src={Marcus}></img>
            </div>
            <h2>Marcus</h2>
            <p>“Great date spot! My wife and I really enjoyed the atmosphere.”</p>
        </div>
        <div className="review-container">
            <div className="rating-container">
                <h2>Rating</h2>
                <img src={LemonRatingThreePointFive}></img>
            </div>
            <div className="image container">
                <img src={Mosalowa}></img>
            </div>
            <h2>Mosalowa</h2>
            <p>“Had a good time here with my family. Service was fast.”</p>
        </div>
        <div className="review-container">
            <div className="rating-container">
                <h2>Rating</h2>
                <img src={LemonRatingFive}></img>
            </div>
            <div className="image container">
                <img src={Ann}></img>
            </div>
            <h2>Ann</h2>
            <p>“Best Mediterranean food in Chicago!”</p>
        </div>
        <div className="review-container">
            <div className="rating-container">
                <h2>Rating</h2>
                <img src={LemonRatingFour}></img>
            </div>
            <div className="image-container">
                <img src={Dimitri}></img>
            </div>
            <h2>Dimitri</h2>
            <p>“My coworkers and I like grabbing a quick lunch here.”</p>
        </div>
    </section>
</div>
    <section className="about">
        <div className="text-container">
            <h1>Little Lemon</h1>
            <h2>About</h2>
            <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,  and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
        </div>
        <div>
            <img src={AdrianAndMario}></img>
        </div>
    </section>
</body>
    );
}

export default Body;