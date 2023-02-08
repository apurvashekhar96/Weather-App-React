import React from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { Error, myErrorHandler } from "./components/ErrorBoundary";
import InputForm from "./components/InputForm";
import CountryCards from "./components/CountryCards";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <section className="headerContainer">
          <h1 className="header">Weather App</h1>
        </section>

        <section className="appContainer">
          <ErrorBoundary FallbackComponent={Error} onError={myErrorHandler}>
            <Provider store={store}>
              <div className="appDisplay">
                <InputForm />
                <CountryCards />
              </div>
            </Provider>
          </ErrorBoundary>
        </section>
      </div>
    </div>
  );
}

export default App;
