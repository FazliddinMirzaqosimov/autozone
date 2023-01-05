import React from "react";
import "./button.style.scss";

function Button({ children, main }) {
  return (
    <button
      className="main-button"
      style={{
        backgroundColor: main ? "var(--red-color)" : "#35974000",
        color: main ? "#FFFFFF" : "var(--red-color)",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
