import React from "react";
import "./button.style.scss";

function Button({ children, main }) {
  return (
    <button
      className="main-button"
      style={{
        backgroundColor: main ? "#359740" : "#FFFFFF",
        color: main ? "#FFFFFF" : "#359740",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
