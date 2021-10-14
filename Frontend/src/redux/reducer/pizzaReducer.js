export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZA-REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZA-SSUCCESS":
      return {
        loading: false,
        success: true,
        pizzas: action.payload,
      };
    case "GET_PIZZA-FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZA-REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PIZZA-SSUCCESS":
      return {
        loading: false,
        success: true,
        pizzas: action.payload,
      };
    case "ADD_PIZZA-FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZABYID_SSUCCESS":
      return {
        loading: false,
        success: true,
        pizza: action.payload,
      };
    case "GET_PIZZABYID_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const updatePizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PIZZABYID_REQUEST":
      return {
        ...state,
        updatedLoading: true,
      };
    case "UPDATE_PIZZABYID_SSUCCESS":
      return {
        updateLoading: false,
        updateSuccess: true,
        // updatedPizza: action.payload,
      };
    case "GUPDATE_PIZZABYID_FAIL":
      return {
        updateError: action.payload,
        updatedLoading: false,
      };
    default:
      return state;
  }
};
