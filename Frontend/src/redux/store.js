import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllPizzaReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaByIdReducer,
} from "./reducer/pizzaReducer";
import { cartReducer } from "./reducer/cartReducer";
import {
  userRegisterReducer,
  userLoginReducer,
  getAllUserReducer,
} from "./reducer/userReducer";
import {
  placeOrderReducer,
  getUserOrderReducer,
  getAllOrderReducer,
} from "./reducer/orderReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  userRegisterReducer: userRegisterReducer,
  userLoginReducer: userLoginReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrderReducer: getUserOrderReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzaByIdReducer: updatePizzaByIdReducer,
  getAllOrderReducer: getAllOrderReducer,
  getAllUserReducer: getAllUserReducer,
});

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  userLoginReducer: {
    currentUser: currentUser,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
