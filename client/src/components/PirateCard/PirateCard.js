import React from "react";
import "./PirateCard.css";

const PirateCard = props => (
  <div selected={props.selected} id={props.id} onClick={props.onClick} className="card bg-dark text-white">
    <img className="card-img" alt={props.name} src={props.image} />
    <div className="card-img-overlay">
      <div className="content text-center">
        <ul>
          <li className="card-text">
            <strong>{props.name}</strong> 
          </li>
          <li className="card-text">
            <strong>{props.position}</strong> 
          </li>
          <li className="card-text">
            <strong>{props.crew}</strong> 
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default PirateCard;