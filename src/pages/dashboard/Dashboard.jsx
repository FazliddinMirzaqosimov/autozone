import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DashFilterCard from "../../components/filtersCard/DashFilter";
import { apiUrl } from "../../global";
import "./dashboard.style.scss";

function Dashboard() {
  const [poductCount, setProductCount] = useState();

  useEffect(() => {
    fetch(`${apiUrl}/api/v1/products`)
      .then((res) => res.json())
      .then((data) => setProductCount(data.result));
  });
  return (
    <div className="dashboard">
      <div className="crud-btns">
        <Link to="/post">ADD</Link>
        <Link to="/overview">UPDATE</Link>
        <Link to="/reset">RESET</Link>
      </div>
      <div className="filters">
        <h1>Filters</h1>
        <div className="filter-cards">
          <DashFilterCard filterName="Cars" filterType="car" />
          <DashFilterCard filterName="Categories" filterType="category" />
          <DashFilterCard filterName="Countries" filterType="country" />
        </div>
      </div>
      <div className="statics">
        <h1>Statistics</h1>
        <p className="statistic">Products: {poductCount}</p>
      </div>
    </div>
  );
}

export default Dashboard;
