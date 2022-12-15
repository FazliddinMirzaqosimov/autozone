import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Title from "../Title/Title";
import "./showcase.style.scss";

function Showcase() {
  const showProduct = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  };
  return (
    <div className="showcase">
      <div className="showcase__def">
        <h1>{showProduct.title.slice(0, 40)}</h1>
        <p>{showProduct.description.slice(0, 200)}...</p>
        <div className="showcase__def__cost">
          <img src="./assets/media/Vector.png" alt="" />
          <h1>${showProduct.price}</h1>
          <p>${(showProduct.price * 1.1).toFixed(2)}</p>
        </div>
        <div className="showcase__def__buttons">
          <Link to={"product/" + showProduct.id}>
            <Button main={true}>Show product</Button>
          </Link>
          <Link to="/overview">
            <Button main={false}>Discover</Button>
          </Link>
        </div>
      </div>
      <img src={showProduct.image} alt="" />
    </div>
  );
}

export default Showcase;
