import { ADD_TO_LIKE, REMOVE_TO_LIKE, CHANGE_IS_ADMIN } from "./UserType";

const initialState = {
  likedProducts: JSON.parse(localStorage.getItem("like")) || [],
  lastProduct: {},
  isDark: false,
  isAdmin: Boolean(localStorage.getItem("isAdmin")),
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIKE:
      const likedProducts = [
        ...new Set([...state.likedProducts, action.payload]),
      ];
      localStorage.setItem("like", JSON.stringify(likedProducts));
      return {
        ...state,
        likedProducts,
      };
    case CHANGE_IS_ADMIN:
      return {
        ...state,
        isAdmin: true,
      };

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
