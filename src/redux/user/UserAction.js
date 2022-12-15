import {
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_TO_CART,
  REMOVE_TO_LIKE,
} from "./UserType";

function addToCarts(productId) {
  return {
    type: ADD_TO_CART,
    payload: productId,
  };
}
function addToLikes(productId) {
  return {
    type: ADD_TO_LIKE,
    payload: productId,
  };
}
function removeToCarts(productId) {
  return {
    type: REMOVE_TO_CART,
    payload: productId,
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
  addToCarts,
  removeToCarts,
  removeToLikes,
  changeLastProduct,
};
