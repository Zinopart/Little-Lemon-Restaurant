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
    <section className="testimonials">
        <h1>Testimonials</h1>
        <div className="review-marcus">
            <h2>Rating</h2>
            <img src={LemonRatingFour}></img>
            <img src={Marcus}></img>
            <h2>Marcus</h2>
            <p>“Great date spot! My wife and I really enjoyed the atmosphere.”</p>
        </div>
        <div className="review-mosalowa">
            <h2>Rating</h2>
            <img src={LemonRatingThreePointFive}></img>
            <img src={Mosalowa}></img>
            <h2>Mosalowa</h2>
            <p>“Had a good time here with my family. Service was fast.”</p>
        </div>
        <div className="review-ann">
            <h2>Rating</h2>
            <img src={LemonRatingFive}></img>
            <img src={Ann}></img>
            <h2>Ann</h2>
            <p>“Best Mediterranean food in Chicago!”</p>
        </div>
        <div className="review-dimitri">
            <h2>Rating</h2>
            <img src={LemonRatingFour}></img>
            <img src={Dimitri}></img>
            <h2>Dimitri</h2>
            <p>“My coworkers and I like grabbing a quick lunch here.”</p>
        </div>
    </section>
    <section className="about">
        <div>
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