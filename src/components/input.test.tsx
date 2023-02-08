import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../state/store";
import InputForm from "../components/InputForm";

describe("Testing all pages", () => {
  test("Input form has input and disabled button", () => {
    render(
      <Provider store={store}>
        <InputForm />
      </Provider>
    );
    const inpEl = screen.getByPlaceholderText("Enter Country");
    expect(inpEl).toBeInTheDocument();
    const btn = screen.getByRole("button", { name: "Search the Region" });
    expect(btn).toBeDisabled();
  });
  test("button is enabled when user types", () => {
    render(
      <Provider store={store}>
        <InputForm />
      </Provider>
    );
    const inpEl = screen.getByPlaceholderText("Enter Country");
    expect(inpEl).toBeInTheDocument();
    userEvent.type(inpEl, "abc");
    const btn = screen.getByRole("button", { name: "Search the Region" });
    expect(btn).toBeEnabled();
  });
});
