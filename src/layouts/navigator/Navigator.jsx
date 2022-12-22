import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LoginPopup from "../../components/Login/LoginPopup";
import "./navigator.style.scss";

function Navigator({ setIsDark, isDark }) {
  const [active, setActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
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
      <LoginPopup isActive={isLogin} setIsActive={setIsLogin} />
      <nav>
        <div className="navbar">
          <NavLink to="/">
            <img src="./assets/logos/Frame.png" alt="" />
          </NavLink>
          <NavLink to="/overview" className="link">
            ALL PRODUCTS
          </NavLink>
          <NavLink to="/about" className="link">
            ABOUT
          </NavLink>
          <p className="link" onClick={changeMode}>
            Night/Light
          </p>
          <p
            className="link"
            onClick={() => {
              setIsLogin(true);
            }}
          >
            LOGIN
          </p>
          <div className="icons">
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <form action="">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" placeholder="Search" />
          </form>
          <div className="specials">
            <button>
              <i className="fa-regular fa-heart"></i>
            </button>
            <button>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button className="menu__btn" onClick={() => setActive(!active)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        <div
          className={"menu " + (active ? "active" : "")}
          onClick={(e) => {
            return e.target.className === "search__input"
              ? ""
              : setActive(!active);
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
          <p
            className="link"
            onClick={() => {
              setIsLogin(true);
            }}
          >
            LOGIN
          </p>
          <form action="">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" className="search__input" placeholder="Search" />
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navigator;
