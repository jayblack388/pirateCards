import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const customStyles = {
    content : {
        width:"100%",
        height: 0,
        paddingBottom:"56%",
        position: "relative"
    }
  };

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <div style={customStyles}>
            <iframe src="https://giphy.com/embed/u0SQkPClLiBry" frameBorder="0" className="giphy-embed" title="No Zombies Allowed"></iframe>
          </div>
          <br />
          <h1>404 Page Not Found</h1>

        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
