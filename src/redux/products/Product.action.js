import axios from "axios";
import { apiUrl } from "../../global";
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
      .get(apiUrl + "/api/v1/products")
      .then((response) => {
        dispatch(fetchProductSucces(response.data.data.products));
      })
      .catch((error) => {
        dispatch(fetchProductFail(error.message));
      });
  };
}

export default fetchProducts;
