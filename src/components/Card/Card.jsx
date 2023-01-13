import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiUrl } from "../../global";
import fetchProducts from "../../redux/products/Product.action";
import { addToLikes, removeToLikes } from "../../redux/user/UserAction";
import ThemeContext from "../../themeContext";
import Rate from "../Rate/Rate";
import Title from "../Title/Title";
import "./card.style.scss";

function Card({
  image,
  rating,
  price,
  name,
  length,
  _id,
  createdAt,
  country,
  category,
}) {
  const [active, setActive] = useState("active");
  const productTitle =
    name.length < length ? name : `${name.slice(0, length)} ...`;
  const isDark = React.useContext(ThemeContext);
  const myProducts = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state) => state.user);

  const deleteProduct = async (id) => {
    return await fetch(apiUrl + "/api/v1/products/" + id, {
      method: "DELETE",
    });
  };
  useEffect(() => {});
  return (
    <div className="card">
      {isAdmin ? (
        <div className="change-product">
          <Link to={`/edit/${_id}`}>edit</Link>
          <p
            onClick={() => {
              deleteProduct(_id);
              dispatch(fetchProducts());
            }}
          >
            delete
          </p>
        </div>
      ) : (
        ""
      )}
      <Link to={`/product/${_id}`}>
        <div className={`card__img ${active}`}>
          <div className={`img-loading`}>
            <div className="circle"></div>
          </div>
          <img
            src={image || "/assets/logos/logop.png"}
            style={{
              filter: isDark && !image ? "drop-shadow(0 0 3px)" : "",
            }}
            alt=""
            onLoad={() => {
              setActive("");
            }}
          />{" "}
        </div>
      </Link>
      <div className="card__def">
        <div className="card__def__rating">
          <Rate rate={rating} />
        </div>
        <Title size={16}>
          <Link className="card__def__title" to={`/product/${_id}`}>
            {productTitle}
          </Link>
        </Title>
        <p>{country}</p>
        <p>{createdAt}</p>
        <p>{category}</p>
        <div className="card__def__sale">
          <Title size={28}>{price} So'm</Title>
          {myProducts.likedProducts.includes(_id) ? (
            <i
              className="fa-solid fa-heart"
              onClick={() => dispatch(removeToLikes(_id))}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart"
              onClick={() => {
                console.log(_id);
                dispatch(addToLikes(_id));
              }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
