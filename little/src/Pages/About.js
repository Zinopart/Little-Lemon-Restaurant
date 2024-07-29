import React from "react";
import Header from "../Components/Header.js"
import Nav from "../Components/Nav.js"
import Footer from "../Components/Footer";
import AdrianAndMario from "../Components/Assets/adrian-and-mario.png"

const About = () => {
  return (
    <div>
    <Header />
    <Nav />
    <section id="about">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,  and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
        <img src={AdrianAndMario}></img>
    </section>
    <Footer />
    </div>
  )
}
  export default About;