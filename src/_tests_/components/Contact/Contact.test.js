import React from "react";
import "@testing-library/jest-dom";
import Contact from "../../../pages/contact/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Test the Contact Component", () => {
  test("submit button should exist", async () => {
    render(<Contact />);
    const button = await screen.findByRole("button", { name: "send message" });
    expect(button).toBeTruthy();
  });

  test("google maps should exist", async () => {
    render(<Contact />);

    expect(screen.getByTitle("google-maps")).toBeInTheDocument();
  });

  test("should be able to submit the form ", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("Name");
    const email = screen.getByPlaceholderText("Email");
    const subject = screen.getByPlaceholderText("Subject");
    const message = screen.getByPlaceholderText("Message");
    const btn = screen.getByRole("button");
    userEvent.type(name);
    userEvent.type(email);
    userEvent.type(subject);
    userEvent.type(message);
    userEvent.click(btn);
  });
});
