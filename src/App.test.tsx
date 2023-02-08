import React from "react";
import userEvent from "@testing-library/user-event";
import { findAllByTestId, render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing all pages", () => {
  test("if submit button is sending req and loader is rendered as well as the country page", async () => {
    render(<App></App>);
    const inpEl = screen.getByPlaceholderText("Enter Country");
    userEvent.type(inpEl, "test");
    const btn = screen.getByRole("button", { name: "Search the Region" });
    userEvent.click(btn);
    const element = await screen.findByTestId("loader");
    await expect(element).toBeInTheDocument();
  });
  test("if error is thrown", async () => {
    render(<App></App>);
    const inpEl = screen.getByPlaceholderText("Enter Country");
    userEvent.type(inpEl, "randomerrorexpected");
    const btn = screen.getByRole("button", { name: "Search the Region" });
    userEvent.click(btn);
    setTimeout(function () {
      const element = screen.getByTestId("error");
      expect(element).toBeInTheDocument();
    }, 3000);
  });
  test("country card is shown", async () => {
    render(<App></App>);
    const inpEl = screen.getByPlaceholderText("Enter Country");
    userEvent.type(inpEl, "test");
    const btn = screen.getByRole("button", { name: "Search the Region" });
    userEvent.click(btn);
    setTimeout(function () {
      const element = screen.getByRole("button", { name: "Capital Weather" });
      expect(element).toBeInTheDocument();
      userEvent.click(element);
      const weatherEl = screen.getByTestId("weather");
      expect(weatherEl).toBeInTheDocument();
    }, 3000);
  });
});
