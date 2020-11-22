import React from "react";
import ReactDOM from "react-dom";
import AddNote from "./AddNote";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <AddNote />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
