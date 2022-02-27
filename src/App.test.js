import { render, screen } from "@testing-library/react";
import { ReactDOM } from "react";
import App from "./App";

it("Renders successfully", () => {
  const testDiv = document.createElement("div");
  ReactDOM.render(<App />, testDiv);
});
