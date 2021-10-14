import axios from "axios";

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().userLoginReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    await axios.post("/api/placeorder", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
  }
};

export const getUserOrder = () => async (dispatch, getState) => {
  const currentUser = getState().userLoginReducer.currentUser;
  dispatch({ type: "USER_ORDER_REQUEST" });
  try {
    const res = await axios.post("/api/userorder", { userId: currentUser.id });
    dispatch({ type: "USER_ORDER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};

export const getAllOrder = () => async (dispatch) => {
  dispatch({ type: "ALL_ORDER_REQUEST" });
  try {
    const res = await axios.get("/api/alluserorder");
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};
export const orderDeliver = (orderId) => async (dispatch) => {
  dispatch({ type: "ORDER_DELIVER_REQUEST" });
  try {
    await axios.post("/api/deliverorder", { orderId });
    const res = await axios.get("/api/alluserorder");
    dispatch({ type: "ORDER_DELIVER_SUCCESS", payload: res.data });
    window.location.href = "/admin/orderslist";
  } catch (error) {
    dispatch({ type: "ORDER_DELIVER_FAIL", payload: error });
  }
};
