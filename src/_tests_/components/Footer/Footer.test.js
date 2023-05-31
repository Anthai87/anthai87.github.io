import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";
import Footer from "../../../components/footer/index";

test("Test Footer titles", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  const aboutElement = screen.getByText(/About/i);
  expect(aboutElement).toBeInTheDocument();

  const blogsElement = screen.getByText(/Blogs/i);
  expect(blogsElement).toBeInTheDocument();

  const conceptElement = screen.getByText(/Concept/i);
  expect(conceptElement).toBeInTheDocument();

  const faqElement = screen.getByText(/FAQ/i);
  expect(faqElement).toBeInTheDocument();
});
