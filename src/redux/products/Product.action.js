import axios from "axios";
import { apiUrl } from "../../global";
import {
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_SUCCES,
  FETCH_PRODUCT_REQUEST,
  FETCH_FILTER,
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
export function fetchFiltersSucces(filters) {
  return {
    type: FETCH_FILTER,
    payload: filters,
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
        console.log(error);
        dispatch(fetchProductFail(error.message));
      });
  };
}
export function fetchFilters() {
  return (dispatch) => {
    dispatch(fetchProductRequest());
    axios
      .get(`${apiUrl}/api/v1/filters`)
      .then((response) => {
        dispatch(fetchFiltersSucces(response.data.data.filters));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchProductFail(error.message));
      });
  };
}

export default fetchProducts;
