import React from "react";
import CardHolder from "./CardHolder";
import { connect } from "react-redux";
import N from "../Pages/N";
const NightDeals = ({menue,dispatch}) =>{
  
  return (
    <div>
      <N />
             <h1 className="header">Nights Deals</h1>
 
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

export default connect(mapStoreToState)(NightDeals);