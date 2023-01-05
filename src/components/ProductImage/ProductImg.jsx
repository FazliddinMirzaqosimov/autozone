import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCarts,
  addToLikes,
  removeToCarts,
  removeToLikes,
} from "../../redux/user/UserAction";
import "./productimage.style.scss";

function ProductImg({ product }) {
  const myProducts = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <div className="productImg">
        <p className="productImg__path">
          Main / Category / <span>{product.category}</span>
        </p>
        <div className="productImg__main">
          <img src={product.image} alt="" />
          <div className="productImg__main__def">
            <h1>{product.title}</h1>
            <div className="productImg__main__def__category">
              <p>Aviable</p>
              <p>{product.category.toUpperCase()}</p>
            </div>
            <p>{product.description}</p>
            <div className="productImg__main__def__sale">
              <div>
                <p>${(product.price * 1.1).toFixed(2)}</p>
                <h2>${product.price}</h2>
              </div>
              <div>
                {myProducts.likedProducts.includes(product.id) ? (
                  <i
                    className="fa-solid fa-heart"
                    onClick={() => dispatch(removeToLikes(product.id))}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-heart"
                    onClick={() => dispatch(addToLikes(product.id))}
                  ></i>
                )}
                {/* {myProducts.cartProducts.includes(product.id) ? (
                  <i
                    className="fa-solid fa-check"
                    onClick={() => dispatch(removeToCarts(product.id))}
                  ></i>
                ) : (
                  <p
                    data-id={product.id}
                    onClick={() => dispatch(addToCarts(product.id))}
                  >
                    Add to cart
                  </p>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductImg;
