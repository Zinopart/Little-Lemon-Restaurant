/*import ReactDOM from 'react-dom/client';*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About.js";
import Home from "../Pages/Home.js";
import Login from "../Pages/Login.js";
import Menu from "../Pages/Menu.js";
import OrderOnline from "../Pages/OrderOnline.js";
import Reservations from "../Pages/Reservations.js";
import NoPage from "../Pages/NoPage.js";

const Header = () => {
    return(
            <BrowserRouter>
              <Routes>
                <Route path = "/" element={<Home></Home>}></Route>
                <Route path = "about" element={<About></About>}></Route>
                <Route path = "login" element={<Login></Login>}></Route>
                <Route path = "menu" element={<Menu></Menu>}></Route>
                <Route path = "orderOnline" element={<OrderOnline></OrderOnline>}></Route>
                <Route path = "reservations" element={<Reservations></Reservations>}></Route>
                <Route path ="*" element={<NoPage></NoPage>}></Route>
              </Routes>
            </BrowserRouter>
          )
        };

export default Header