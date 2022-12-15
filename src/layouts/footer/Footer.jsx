import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.style.scss";

function Footer() {
  return (
    <footer>
      <div className="top">
        <NavLink to="/overview" className="link">
          ALL PRODUCTS
        </NavLink>
        <div className="stick"></div>
        <NavLink to="about" className="link">
          ABOUT SEEDRA
        </NavLink>
        <div className="stick"></div>
        <NavLink to="blog" className="link">
          OUR BLOG
        </NavLink>
        <div className="stick"></div>
        <NavLink to="" className="link logo">
          <img src="./assets/logos/Frame.png" alt="" />
        </NavLink>
        <a to="" className="link">
          Terms&Conditions
        </a>
        <div className="stick"></div>
        <a to="" className="link">
          Privacy Policy
        </a>
      </div>
      <div className="bottom">
        <div className="icons">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
