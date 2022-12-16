import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./showcase.style.scss";

function Showcase() {
  const showProduct = {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
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
