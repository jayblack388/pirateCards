import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ overflowY: "auto", overflowX: "hidden", height: 360, clear: "both", padding: 0, paddingTop: 60, textAlign: "center", backgroundColor: "#e22620" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
