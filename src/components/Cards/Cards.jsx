import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../redux/products/Product.action";
import Card from "../Card/Card";
import "./cards.style.scss";

function Cards({ store ,length}) {
  return (
    <div className="product-cards">
      {store.map((el) => (
        <Card {...el} length={length} key={el.id} />
      ))}
    </div>
  );
}

export default Cards;
