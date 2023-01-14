import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.style.scss";

function Footer({ isDark }) {
  return (
    <footer>
      <div className="top">
        <div className="stick"></div>
        <NavLink to="/overview" className="link">
          ALL PRODUCTS
        </NavLink>
        <div className="stick"></div>
        <NavLink to="/about" className="link">
          ABOUT
        </NavLink>
        <div className="stick"></div>
        <NavLink to="" className="link logo">
          <img
            src="./assets/logos/Frame.png"
            style={{ filter: isDark ? "drop-shadow(0 0 1px)" : "" }}
            alt=""
          />
        </NavLink>
        <div className="stick"></div>
        <a
          href="https://www.instagram.com/autozone__shop/"
          target="_blank"
          className="link"
        >
          OUR BLOG
        </a>
        <div className="stick"></div>
        <a to="" className="link">
          Privacy Policy
        </a>
        <div className="stick"></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <a href="https://www.instagram.com/autozone__shop/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
