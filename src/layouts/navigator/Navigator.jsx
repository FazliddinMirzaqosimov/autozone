import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// import LoginPopup from "../../components/Login/LoginPopup";
import "./navigator.style.scss";

function Navigator({ setIsDark, isDark }) {
  const [active, setActive] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);

  const changeMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const y = window.scrollY;
    window.onscroll = active
      ? function () {
          window.scrollTo(0, y);
        }
      : function () {};
  });
  return (
    <>
      <nav>
        <div className="navbar">
          <NavLink to="/">
            <img
              src="./assets/logos/Frame.png"
              style={{ filter: isDark ? "drop-shadow(0 0 1px)" : "" }}
              alt=""
            />
          </NavLink>
          <div className="right-links">
            <NavLink to="/overview" className="link">
              ALL PRODUCTS
            </NavLink>
            <NavLink to="/about" className="link">
              ABOUT
            </NavLink>
            <p className="link" onClick={changeMode}>
              Night/Light
            </p>
            <div className="icons">
              <a
                href="https://www.instagram.com/autozone__shop/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <Link to="/likes">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <button className="menu__btn" onClick={() => setActive(!active)}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className={"menu " + (active ? "active" : "")}
          onClick={() => {
            setActive(!active);
          }}
        >
          <NavLink to="/overview" className="link">
            ALL PRODUCTS
          </NavLink>
          <NavLink to="/about" className="link">
            ABOUT
          </NavLink>
          <p className="link" onClick={changeMode}>
            Night/Light
          </p>
        </div>
      </nav>
    </>
  );
}

export default Navigator;
