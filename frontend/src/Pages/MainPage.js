import React from "react";
import Car from "./Car";
import N from "./N";
import CardHolder from "./CardHolder";
import Footer from "./Footer";

import { connect } from "react-redux";
const MainPage = ({menue,dispatch}) => { 
  return (
    <div>
      <N />
      <Car />
      <div className="d-flex d.column flex-wrap">
        {menue.map((single) => {
          return <CardHolder dispatch={dispatch} menue={single} />;
        })}
      </div>
    </div>
  );
};
const mapStoreToState = (state) => {
  return {
    menue: state.dish,
  };
};

export default connect(mapStoreToState)(MainPage);