import React from "react";
import Jumbotron from '../Jumbotron';
import {Row, Col} from "../Grid";
import "./Score.css";

const Score = props => (
  <Jumbotron>
    <h1>{props.crew}</h1><br />
    <Row>
      <Col size="sm-6">
        <h3>Best Score:  {props.best}</h3>
      </Col>
      <Col size="sm-6">
        <h3>Current Score:  {props.current}</h3>
      </Col>
    </Row>
  </Jumbotron>
);

export default Score;
