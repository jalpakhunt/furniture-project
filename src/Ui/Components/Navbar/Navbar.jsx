import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const loginUser = useSelector((state) => state.auth);
  return (
    <>

    <div>
      <header>
        {/* <!-- Header desktop --> */}
        <div className="container-menu-desktop">
          {/* <!-- Topbar --> */}
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>

              <div className="right-top-bar flex-w h-full">
                <NavLink to={"/signup"} className="flex-c-m trans-04 p-lr-25">
                  SignUp
                </NavLink>

                <NavLink to="/profile" className="flex-c-m trans-04 p-lr-25">
                  Profile
                </NavLink>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  EN
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>

          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              {/* <!-- Logo desktop -->		 */}
              <a href="#" className="logo">
                <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
              </a>

              {/* <!-- Menu desktop --> */}
              <div className="menu-desktop">
                <ul className="main-menu">

                {loginUser?.user?.userType === "admin" ? (
                <>

                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>

                  <li>
                    <NavLink to="/orders">Orders</NavLink>
                  </li>

                  <li>
                    <NavLink to="/products">Products</NavLink>
                  </li>

                  <li>
                    <NavLink to="/users">Users</NavLink>
                  </li>
                  <li>
                        <NavLink to="/profile">Profile</NavLink>
                      </li>
                </>
                ):(


             <>

                  <li className="active-menu">
                    <NavLink to="/">Home</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/">Homepage 1</NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="/home2">Homepage 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="/home3">Homepage 3</NavLink>
                      </li> */}
                    </ul>
                  </li>

                  <li>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>

                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>

                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>

                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  </>
             
              )}
              </ul>
              </div>

              {/* <!-- Icon header --> */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>

                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify="2"
                >
                  <NavLink to="/cart">
                    <i className="zmdi zmdi-shopping-cart "></i>
                  </NavLink>
                </div>

                <a
                  href="#"
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify="0"
                >
                  <i className="zmdi zmdi-favorite-outline"></i>
                </a>
                
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- Header Mobile --> */}
        <div className="wrap-header-mobile">
          {/* <!-- Logo moblie -->		 */}
          <div className="logo-mobile">
            <NavLink to="/">
              <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
            </NavLink>
          </div>

          {/* <!-- Icon header --> */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search"></i>
            </div>

            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify="2"
            >
              <NavLink to={"/cart"}>
                <i className="zmdi zmdi-shopping-cart"></i>{" "}
              </NavLink>
            </div>

            <a
              href="#"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify="0"
            >
              <i className="zmdi zmdi-favorite-outline"></i>
            </a>
          </div>

          {/* <!-- Button show menu --> */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>
      </header>
    </div>
    </>

  );
}
