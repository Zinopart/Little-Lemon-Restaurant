import React from "react";
import Home from "./Pages/Home"
import Reservations from "./Pages/Reservations"

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home></Home>}></Route>
      <Route path = "/reservations" element={<Reservations></Reservations>}></Route>
    </Routes>
  );
}

export default App;
