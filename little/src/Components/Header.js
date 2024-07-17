/*import ReactDOM from 'react-dom/client';*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import OrderOnline from "./Pages/OrderOnline";
import Reservations from "./Pages/Reservations";
import NoPage from "./Pages/NoPage";

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