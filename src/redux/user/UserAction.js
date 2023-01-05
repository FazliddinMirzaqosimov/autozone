import { ADD_TO_LIKE, REMOVE_TO_LIKE, CHANGE_IS_ADMIN } from "./UserType";

// function addToCarts(productId) {
//   return {
//     type: ADD_TO_CART,
//     payload: productId,
//   };
// }
function addToLikes(productId) {
  return {
    type: ADD_TO_LIKE,
    payload: productId,
  };
}
function changeIsAdmin() {
  return {
    type: CHANGE_IS_ADMIN,
  };
}
function removeToLikes(productId) {
  return {
    type: REMOVE_TO_LIKE,
    payload: productId,
  };
}
function changeLastProduct(product) {
  return {
    type: "CHANGE_LAST_PRODUCT",
    payload: product,
  };
}

export {
  addToLikes,
  // addToCarts,
  changeIsAdmin,
  removeToLikes,
  changeLastProduct,
};
