import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../state/store";
import CountryCards from "../components/InputForm";
import { CountryNameActionTypes } from "../state/action-types";
import { myErrorHandler } from "./ErrorBoundary";

describe("test country cards", () => {
  test("weather is displayed", () => {
    render(
      <Provider store={store}>
        <CountryCards></CountryCards>
      </Provider>
    );
    const element = screen.queryByRole("button", { name: "Capital Weather" });
    expect(element).not.toBeInTheDocument();
    store.dispatch({
      type: CountryNameActionTypes.SEARCH_COUNTRY_SUCCESS,
      payload: [
        {
          name: { official: "India" },
          population: 1212,
          capital: ["newdelhi"],
          latlng: [11, 12],
          flags: { svg: "fake.svg", alt: "fake svg" },
        },
      ],
    });
    setTimeout(function () {
      const element = screen.getByRole("button", { name: "Capital Weather" });
      expect(element).toBeInTheDocument();
      userEvent.click(element);
      const weatherEl = screen.getByTestId("weather");
      expect(weatherEl).toBeInTheDocument();
    }, 2000);
  });
});

// userEvent.click(element);
// const weatherEl = screen.getByTestId("weather");
// expect(weatherEl).toBeInTheDocument();
// test("call error func", () => {
//     const err = new Error("I am an error");
//     myErrorHandler(err);
//     jest.spyOn(console, "error");
//     expect(console.error).toHaveBeenCalled();
//   });
