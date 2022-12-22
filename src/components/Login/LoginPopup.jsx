import React from "react";
import "./login.style.scss";

function LoginPopup({ isActive, setIsActive }) {
  const handleClick = () => {
    setIsActive(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsActive(false);
  };
  return (
    <div className={"login-popup" + (isActive ? "" : " hidden")}>
      <div className="modal">
        <button className="btn--close-modal" onClick={handleClick}>
          &times;
        </button>
        <h2 className="modal__header">Login</h2>
        <form className="modal__form">
          <label>Email Address</label>
          <input type="email" />
          <label>Password</label>
          <input type="text" />
          <button className="btn" type="submit" onClick={handleSubmit}>
            Next step &rarr;
          </button>
        </form>
      </div>
      <div className="overlay" onClick={handleClick}></div>
    </div>
  );
}

export default LoginPopup;
