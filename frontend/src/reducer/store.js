import { createStore, combineReducers } from "redux";
import bucketReducer from "./bucketReducer";
import { dishesReducer } from "./dishesReducer";
export default () => {
  const store = createStore(
    combineReducers({
      dish: dishesReducer,
      bucket: bucketReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
