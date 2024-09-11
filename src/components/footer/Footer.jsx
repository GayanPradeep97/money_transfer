/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import Logo from "../../assets/footer_logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_main">
        <div className="footer_logo">
          <img src={Logo}></img>
        </div>
        <div className="footer_links">
          <ul>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/term-condition">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/disclaimer">Disclaimer</NavLink>
            </li>
            <li>
              <NavLink to="aboutUs">About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer_sociallinks">
          <div className="social_links">
            <span>Follow Us:</span>
            <SlSocialFacebook style={{ color: "#fff" }} />
            <SlSocialTwitter style={{ color: "#fff" }} />
          </div>
          <div className="author_text">
            <span>2022 Monex International Limited. All rights reserved</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
