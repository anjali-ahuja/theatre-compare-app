import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import MovieObject from "../MovieObject";

// Test 1: Wants to ensure a component is rendered regardless of what it is
it("Renders successfully", () => {
  const testDiv = document.createElement("div");
  ReactDOM.render(
    <MovieObject title={"Test"} fwPrice={10} cwPrice={8} />,
    testDiv
  );
});

// Test 2: Wants to ensure passed title is rendered
it("Renders Title", () => {
  const { getByTestId } = render(
    <MovieObject title={"Glorious Title"} fwPrice={10} cwPrice={8} />
  );
  expect(getByTestId("movie-object")).toHaveTextContent("Glorious Title");
});
