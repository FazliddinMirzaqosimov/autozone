import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiUrl } from "../../global";
import fetchProducts from "../../redux/products/Product.action";
import Cards from "../Cards/Cards";
import Categories from "../Categories/Categories";
import Title from "../Title/Title";
import "./products.style.scss";

function ShowcaseProducts() {
  const [productCount, setProductCount] = useState(0);
  const [store, setStore] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/api/v1/products?limit=3&sort=rating`)
      .then((res) => res.json())
      .then((data) => {
        setStore(data.data.products);
      });

    fetch(`${apiUrl}/api/v1/products`)
      .then((res) => res.json())
      .then((data) => setProductCount(data.result));
  }, []);

  return (
    <div className="showcase-products">
      <div className="showcase-products__top">
        <Title size={36}>Our products.</Title>
        <Link to="/overview">View all ({productCount})</Link>
      </div>
      <Link to="/overview" className="showcase-products__categories">
        <Categories />
      </Link>
      <Cards store={store} />
    </div>
  );
}

export default ShowcaseProducts;
