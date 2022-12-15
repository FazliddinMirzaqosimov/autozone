import React from "react";
import "./categories.style.scss";

function Categories({ sortOption, setSortOption }) {
  const handleClick = (e) => {
    if (e.target.textContent.length > 15) return;

    const category =
      e.target.textContent.trim() === "ALL"
        ? ""
        : e.target.textContent.toLowerCase().trim();

    setSortOption({ ...sortOption, category });
  };
  return (
    <div className="product-categories" onClick={handleClick}>
      <div className="card">ALL </div>
      <div className="card">men's clothing </div>
      <div className="card">jewelery </div>
      <div className="card">electronics </div>
      <div className="card">women's clothing </div>
    </div>
  );
}

export default Categories;
