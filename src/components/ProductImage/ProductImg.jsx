import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLikes, removeToLikes } from "../../redux/user/UserAction";
import ThemeContext from "../../themeContext";
import "./productimage.style.scss";

function ProductImg({ product }) {
  const myProducts = useSelector((state) => state.user);
  const isDark = React.useContext(ThemeContext);
  const dispatch = useDispatch();
  const category =
    product.category.length > 15
      ? JSON.parse(product.category)
      : { name: product.category };
  const country =
    product.country.length > 15
      ? JSON.parse(product.country)
      : { name: product.country };
  const car =
    product.car.length > 15 ? JSON.parse(product.car) : { name: product.car };

  return (
    <>
      <div className="productImg">
        <p className="productImg__path">
          Main / Category / <span>{category?.name}</span>
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
              <p style={{ display: category ? "flex" : "none" }}>
                {"Category"}
                <div className="stick"></div>
                {category.name}
              </p>
              <p style={{ display: car ? "flex" : "none" }}>
                {"Car"}
                <div className="stick"></div>
                {car?.name}
              </p>
              <p style={{ display: country ? "flex" : "none" }}>
                {"Country"}
                <div className="stick"></div>
                {country.name}
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
