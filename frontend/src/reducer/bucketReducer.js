const initalState = [];
export default (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TO_BUCKET":
      let tempState = state;
      for (let i = 0; i < tempState.length; i++) {
        if (tempState[i]._id === action.payload._id) {
          tempState[i].qty++;
          return tempState;
        }
      }
      let newItem = {
        ...action.payload,
        qty: 1,
      };

      tempState.push(newItem);
      return tempState;
    case "CLEAR_BUCKET":
      return [];
    default:
      return state;
  }
};
