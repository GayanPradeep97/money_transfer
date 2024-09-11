/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="main-container">
        <div className="container">
          <div className="left-container">
            <NavLink to="/">
              <img className="logo" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="right-container">
            <a className="links">About Us</a>
            <a className="links">How it works?</a>
            <a className="links">Contact</a>
            <button className="login_btn">Login</button>
            <button className="signup_btn">Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
