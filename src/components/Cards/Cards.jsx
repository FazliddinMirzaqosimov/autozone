import React from "react";
import Card from "../Card/Card";
import "./cards.style.scss";

function Cards({ store, length = 100 }) {
  return (
    <div className="product-cards">
      {store.map((el) => (
        <Card {...el} length={length} key={el._id} />
      ))}
    </div>
  );
}

export default Cards;
