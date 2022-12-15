import React, { useState } from "react";
import "./title.style.scss";

function Title({ children, size }) {
  return (
    <h1 className="title" style={{ fontSize: `${size}px` }}>
      {children}
    </h1>
  );
}

export default Title;
