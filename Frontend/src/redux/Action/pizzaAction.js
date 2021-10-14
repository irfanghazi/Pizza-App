import axios from "axios";
import swal from "sweetalert";
export const getAllPizza = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZA-REQUEST" });
  try {
    const res = await axios.get("/api/getAllPizza");
    dispatch({ type: "GET_PIZZA-SSUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZA-FAIL", payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA-REQUEST" });
  try {
    const res = await axios.post("/api/addPizza", { pizza });
    dispatch({ type: "ADD_PIZZA-SSUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "ADD_PIZZA-FAIL", payload: err });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const res = await axios.post("/api/getpizzabyid", { pizzaId });
    dispatch({ type: "GET_PIZZABYID_SSUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: err });
  }
};
export const updatePizzaById = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
  try {
    const res = await axios.post("/api/updatePizzabyid", { updatedPizza });
    dispatch({ type: "UPDATE_PIZZABYID_SSUCCESS", payload: res.data });
    window.location.href = "/admin/pizzaslist";
  } catch (err) {
    dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: err });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post("/api/deletepizza", { pizzaId });
    swal("Pizza Deleted Succss!", "success");
    window.location.reload();
  } catch (error) {
    swal("Errro While Deleteing Pizza");
  }
};

export const filterPizza = (searchKey, category) => async (dispatch) => {
  let filteredPizza;
  dispatch({ type: "GET_PIZZA-REQUEST" });
  try {
    const res = await axios.get("/api/getAllPizza");
    filteredPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey)
    );
    if (category !== "all") {
      filteredPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_PIZZA-SSUCCESS", payload: filteredPizza });
  } catch (err) {
    dispatch({ type: "GET_PIZZA-FAIL", payload: err });
  }
};
