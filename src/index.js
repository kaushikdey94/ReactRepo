import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  React.createElement(
    "div",
    { style: { color: "green" } },
    React.createElement("h1", { style: { color: "Orange" } }, "Bye")
  ),
  document.getElementById("root")
);
