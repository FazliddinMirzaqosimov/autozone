import axios from "axios";
import {
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_SUCCES,
  FETCH_PRODUCT_REQUEST,
} from "./Product.type";

export function fetchProductRequest() {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
}
export function fetchProductSucces(products) {
  return {
    type: FETCH_PRODUCT_SUCCES,
    payload: products,
  };
}
export function fetchProductFail(error) {
  return {
    type: FETCH_PRODUCT_FAIL,
    payload: error,
  };
}

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(fetchProductSucces(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductFail(error.message));
      });
  };
}

export default fetchProducts;
