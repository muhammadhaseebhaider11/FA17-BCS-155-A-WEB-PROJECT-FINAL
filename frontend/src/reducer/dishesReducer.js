const initalState = [];
export const dishesReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_DISH":
      console.log("IN ACC DISHES");
return state.concat(action.payload)
    default:
      return state;
  }
};
