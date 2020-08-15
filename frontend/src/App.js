import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomeRoute from "./routes/route";
import store from "./reducer/store";
import { Provider } from "react-redux";
import axios from "axios";
import {addDish} from './actions/dishActions'
function App() {
  const mainStore = store();

  useEffect(() => {
    axios
      .get("http://localhost:3030/dish")
      .then((response) => {
        mainStore.dispatch(addDish(response.data));
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <Provider store={mainStore}>
      <CustomeRoute />
    </Provider>
  );
}

export default App;
