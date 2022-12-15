import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchProducts from "../../redux/products/Product.action";
import Cards from "../Cards/Cards";
import Categories from "../Categories/Categories";
import Title from "../Title/Title";
import "./products.style.scss";
function ShowcaseProducts() {
  const store = useSelector((store) =>
    store.product.products.filter((_, id) => id < 3)
  );

  return (
    <div className="showcase-products">
      <div className="showcase-products__top">
        <Title size={36}>Our products.</Title>
        <Link to="/overview">View all (12)</Link>
      </div>
      <Link to="/overview" className="showcase-products__categories">
        <Categories />
      </Link>
      <Cards store={store} />
    </div>
  );
}

export default ShowcaseProducts;
