import {
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_TO_CART,
  REMOVE_TO_LIKE,
} from "./UserType";

const initialState = {
  likedProducts: JSON.parse(localStorage.getItem("like")) || [],
  cartProducts: JSON.parse(localStorage.getItem("cart")) || [],
  lastProduct: {},
  isDark: true,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const cartProducts = [
        ...new Set([...state.cartProducts, action.payload]),
      ];
      localStorage.setItem("cart", JSON.stringify(cartProducts));
      return {
        ...state,
        cartProducts,
      };
    case ADD_TO_LIKE:
      const likedProducts = [
        ...new Set([...state.likedProducts, action.payload]),
      ];
      localStorage.setItem("like", JSON.stringify(likedProducts));
      return {
        ...state,
        likedProducts,
      };
    case REMOVE_TO_CART: {
      const x = new Set(state.cartProducts);
      x.delete(action.payload);
      return {
        ...state,
        cartProducts: [...x],
      };
    }
    case REMOVE_TO_LIKE: {
      const x = new Set(state.likedProducts);
      x.delete(action.payload);

      return {
        ...state,
        likedProducts: [...x],
      };
    }
    case "CHANGE_LAST_PRODUCT":
      return {
        ...state,
        lastProduct: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
