import {
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_SUCCES,
  FETCH_PRODUCT_REQUEST,
  FETCH_FILTER,
} from "./Product.type";

const initialState = {
  products: [],
  error: "",
  isLoading: true,
  filters: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case FETCH_PRODUCT_SUCCES:
      return { ...state, products: action.payload, isLoading: false };
    case FETCH_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_FILTER:
      return { ...state, isLoading: false, filters: action.payload };

    default:
      return state;
  }
}
export default productReducer;
