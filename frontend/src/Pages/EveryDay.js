import React from "react";
import CardHolder from "./CardHolder";
import Footer from "./Footer";
import N from "../Pages/N";
import { connect } from "react-redux";
const EveryDay = ({menue,dispatch}) => {
  return (
    <div>
      <N />
      <h1 className="header">Every Day Deals</h1>
      <div className="d-flex d.column flex-wrap">
        {menue.map((single) => {
          return <CardHolder dispatch={dispatch} menue={single}  />;
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
export default connect(mapStoreToState)(EveryDay);
