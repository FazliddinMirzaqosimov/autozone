import { combineReducers } from "redux";
import productReducer from "./products/Product.reducer";
import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
});

export default rootReducer;
