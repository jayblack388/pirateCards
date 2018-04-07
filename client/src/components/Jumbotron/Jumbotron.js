import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ marginBottom: 150, height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "#e22620" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
