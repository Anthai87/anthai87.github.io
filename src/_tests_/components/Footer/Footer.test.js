import { render, screen } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { UnderFooter } from "../../../components/underFooter";

test("Test Footer titles", () => {
  render(<UnderFooter />);

  const aboutElement = screen.getByText(/About/i);
  expect(aboutElement).toBeInTheDocument();

  const contactElement = screen.getByText(/Blogs/i);
  expect(contactElement).toBeInTheDocument();
});
