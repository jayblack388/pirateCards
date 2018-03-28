import React from "react";
import "./PirateCard.css";

const PirateCard = props => (
  <div selected={props.selected} id={props.id} onClick={props.onClick} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Position:</strong> {props.position}
        </li>
        <li>
          <strong>Crew:</strong> {props.crew}
        </li>
      </ul>
    </div>
  </div>
)

export default PirateCard;