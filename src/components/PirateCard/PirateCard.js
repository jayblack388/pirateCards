import React, { Component } from "react";
import "./PirateCard.css";

class PirateCard extends Component {

  render() {
    return (
      <div onClick={this.props.onClick} className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
            <li>
              <strong>Position:</strong> {this.props.position}
            </li>
            <li>
              <strong>Crew:</strong> {this.props.crew}
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default PirateCard;