import axios from "axios";
import swal from "sweetalert";

export const userRegister = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const res = await axios.post("/api/registration", user);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: res.data });
    // window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/login", user);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/"; //returns the URL of the / page
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logOutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const res = await axios.get("/api/getAllusers");
    dispatch({ type: "GET_USERS_SSUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.post("/api/deleteuser", { userId });
    swal("User Deleted Succss!", "success");
    window.location.reload();
  } catch (error) {
    swal("Errro While Deleteing User");
  }
};
