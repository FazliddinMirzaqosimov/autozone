import React from "react";
import "./rate.style.scss";

function Rate({ rate }) {
  const solid = Math.floor(rate);
  const half = Math.ceil(rate - solid);
  const empty = 5 - solid - half;
  return (
    <>
      {[...Array(solid)].map((_, i) => (
        <i key={i} className="fa-solid fa-star star"></i>
      ))}
      {[...Array(half)].map((_, i) => (
        <i key={i} className="fa-regular fa-star-half-stroke star"></i>
      ))}
      {[...Array(empty)].map((_, i) => (
        <i key={i} className="fa-regular fa-star star"></i>
      ))}
    </>
  );
}

export default Rate;
