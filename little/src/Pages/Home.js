import React from "react";
import Header from "../Components/Header.js";
import HeroSection from "../Components/HeroSection.js";
import Specials from "../Components/Specials.js";
import Body from "../Components/Body.js";
import Footer from "../Components/Footer.js";



const Home = () => {
  return(
    <div>
  <Header />
  <HeroSection />
  <Specials />
  <Body />
  <Footer />
  </div>
  )
}
  export default Home;