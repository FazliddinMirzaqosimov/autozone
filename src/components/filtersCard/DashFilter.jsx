import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./filter.style.scss";

function Filter({ filter }) {
  return (
    <p className="filter-line">
      {filter.name}
      <span>
        <Link to={"/delete-filter/" + filter._id}>
          <i className="fa-solid fa-eraser"></i>
        </Link>
        <Link to={"/update-filter/" + filter._id}>
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
      </span>
    </p>
  );
}

function DashFilterCard({ filterName, filterType }) {
  const filters = useSelector((state) => state.product.filters);
  return (
    <div className="dash-filter">
      <Link to={"/add-filter/" + filterType} className="dash-filter__title">
        {filterName} <span>+</span>
      </Link>
      {filters
        .filter((el) => el.filterName === filterType)
        .map((filter) => (
          <Filter filter={filter} />
        ))}
    </div>
  );
}

export default DashFilterCard;
