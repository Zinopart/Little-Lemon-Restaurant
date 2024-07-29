import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav.js"
import ReservationsPage from '../Components/ReservationPage';
import Footer from "../Components/Footer";


const Reservations = () => {
    return (
      <div>
      <Header />
      <Nav />
      <ReservationsPage></ReservationsPage>
      <Footer></Footer>
      </div>
    )
  }

  export default Reservations;