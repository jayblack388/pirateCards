import React from "react";
import "./Score.css";

const Score = props => (
  <div className="jumbotron">
    <h1 className="display4">Testing this Jumbo Out</h1>
    <div className="row">
      <div className="col-6">
        <h5>Best Score:  {props.best}</h5>
      </div>
      <div className="col-6">
        <h5>Current Score:  {props.current}</h5>
      </div>
    </div>
      
  </div>
);

export default Score;
