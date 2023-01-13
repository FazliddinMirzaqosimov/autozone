import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLikes, removeToLikes } from "../../redux/user/UserAction";
import ThemeContext from "../../themeContext";
import "./productimage.style.scss";

function ProductImg({ product }) {
  const myProducts = useSelector((state) => state.user);
  const isDark = React.useContext(ThemeContext);
  const dispatch = useDispatch();
  console.log(myProducts.likedProducts);
  return (
    <>
      <div className="productImg">
        <p className="productImg__path">
          Main / Category / <span>{product.category}</span>
        </p>
        <div className="productImg__main">
          <img
            src={product.image ? product.image : "/assets/logos/logop.png"}
            style={{
              filter: isDark && !product.image ? "drop-shadow(0 0 3px)" : "",
            }}
            alt=""
          />
          <div className="productImg__main__def">
            <h1>{product.name}</h1>
            <div className="productImg__main__def__category">
              <p>Aviable</p>
            </div>
            <div className="productImg__main__def__about">
              <p>
                {"Category"}
                <div className="stick"></div>
                {product.category}
              </p>
              <p>
                {"Car"}
                <div className="stick"></div>
                {product.car}
              </p>
              <p>
                {"Country"}
                <div className="stick"></div>
                {product.country}
              </p>
              <p style={{ display: product.shtrix ? "flex" : "none" }}>
                {"Shtrix"}
                <div className="stick"></div>
                {product.shtrix}
              </p>
            </div>
            <p>{product.description}</p>
            <div className="productImg__main__def__sale">
              <div>
                <p>${(product.price * 1.1).toFixed(2)}</p>
                <h2>${product.price}</h2>
              </div>
              <div>
                {myProducts.likedProducts.includes(product._id) ? (
                  <i
                    className="fa-solid fa-heart"
                    onClick={() => dispatch(removeToLikes(product._id))}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-heart"
                    onClick={() => dispatch(addToLikes(product._id))}
                  ></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductImg;
