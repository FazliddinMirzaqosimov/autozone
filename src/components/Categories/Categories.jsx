import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./categories.style.scss";

function Categories({ sortOption, setSortOption }) {
  const filters = useSelector((state) => state.product.filters);

  const handleClick = (e) => {
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    setSortOption({ ...sortOption, categories: formData });
  };
  return (
    <form className="product-categories" onChange={handleClick}>
      <select name="category" required>
        <option value="">All (Categories)</option>
        {filters.map((el) =>
          el.filterName === "category" ? (
            <option value={el._id}>{el.name}</option>
          ) : (
            ""
          )
        )}
        <option value="others">Others</option>
      </select>

      <select name="car" required id="">
        <option value="">All (Cars)</option>
        {filters.map((el) =>
          el.filterName === "car" ? (
            <option value={el._id}>{el.name}</option>
          ) : (
            ""
          )
        )}
        <option value="others">Others</option>
      </select>

      <select name="country" required id="">
        <option value="">All (Countries)</option>{" "}
        {filters.map((el) =>
          el.filterName === "country" ? (
            <option value={el._id}>{el.name}</option>
          ) : (
            ""
          )
        )}
        <option value="others">Others</option>
      </select>
    </form>
  );
}

export default Categories;
