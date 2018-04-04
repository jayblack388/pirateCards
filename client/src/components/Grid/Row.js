import React from "react";

export const Row = ({ fluid, children }) => (
  <div style={{justifyContent: "center"}} className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
