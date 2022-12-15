import {
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_SUCCES,
  FETCH_PRODUCT_REQUEST,
} from "./Product.type";

const initialState = {
  products: [],
  error: "",
  isLoading: true,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case FETCH_PRODUCT_SUCCES:
      return { ...state, products: action.payload, isLoading: false };
    case FETCH_PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    default:
      return state;
  }
}

export default productReducer;
