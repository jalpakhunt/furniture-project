import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import SignUp from "../Ui/Components/SignUp/SignUp";
import Navbar from "../Ui/Components/Navbar/Navbar";
import Home from "../Ui/Pages/Home/Home";
import Slider2 from "../Ui/Components/Slider/Slider2";
import About from "../Ui/Pages/About/About";
import Contact from "../Ui/Pages/Contact/Contact";
import Footer from "../Ui/Components/Footer/Footer";
import Blog from "../Ui/Pages/Blog/Blog";
import Shop from "../Ui/Pages/Shop/Shop";
import ShoppingCart from "../Ui/Components/ShopingCart/ShoppingCart";
import Cart from "../Ui/Pages/Cart/Cart";
import Home2 from "../Ui/Pages/Home/Home2";
import Home3 from "../Ui/Pages/Home/Home3";
import SideBar from "../Ui/Components/SideBar/SideBar";
import Login from "../Ui/Pages/Login/Login";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import Profile from "../Ui/Pages/Profile/Profile";
import Users from "../Ui/Pages/Admin/Users";
import Orders from "../Ui/Pages/Admin/Orders";
import Dashboard from "../Ui/Pages/Admin/Dashboard";
import { Product } from "../Ui/Pages/Admin/Product";

export default function Routers() {
  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopingcart" element={<ShoppingCart />} />
          <Route path="/home3" element={<SideBar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<Orders />} />


          <Route path="/slider2" element={<Slider2 />} />
          {/* <Route path="/home2" element={<Home2 />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>

    </>
  );
}
