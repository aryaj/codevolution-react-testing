/* import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test('Greet renders correctly',()=>{
    render(<Greet/>)
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
}) */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("Renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});


/* describe('Nested',()=>{
    test("Renders the name", () => {
        render(<Greet name="Ajay" />);
        const textElement = screen.getByText("Hello Ajay");
        expect(textElement).toBeInTheDocument();
      });
  }) */