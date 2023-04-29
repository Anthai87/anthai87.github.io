import { render, screen } from "@testing-library/react";
import Navbar from "../../../components/navbar/index";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Test Contact ref and name", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/contact");
});

test("Test About ref and name", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/about");
});
