import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCarts,
  addToLikes,
  removeToCarts,
  removeToLikes,
} from "../../redux/user/UserAction";
import Rate from "../Rate/Rate";
import Title from "../Title/Title";
import "./card.style.scss";

function Card({ image, rating, price, title, length, id }) {
  const [active, setActive] = useState("active");
  const productTitle =
    title.length < length ? title : `${title.slice(0, length)} ...`;

  const myProducts = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card__img">
        <div className={`img-loading ${active}`}>
          <div className="circle"></div>
        </div>
        <img
          src={image}
          alt=""
          onLoad={() => {
            setActive("");
          }}
        />
      </div>
      <div className="card__def">
        <div className="card__def__rating">
          <Rate rate={rating.rate} />
        </div>
        <Title size={16}>
          <Link className="card__def__title" to={`/product/${id}`}>
            {productTitle}
          </Link>
        </Title>
        <div className="card__def__sale">
          <Title size={28}>${price}</Title>
          {myProducts.likedProducts.includes(id) ? (
            <i
              className="fa-solid fa-heart"
              onClick={() => dispatch(removeToLikes(id))}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart"
              onClick={() => dispatch(addToLikes(id))}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
