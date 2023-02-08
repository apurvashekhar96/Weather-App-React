import { CountryDataModel } from "../models/CountryDataModel";
import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import "./CountryCards.css";
import Loading from "../components/Loading";
import { useErrorHandler } from "react-error-boundary";

const CountryCards = () => {
  const [indexIsOpen, setIndexIsOpen] = useState(-1);
  const { countryNames, weatherData } = useTypedSelector((state) => state);
  const { searchWeatherData } = useActions();
  const errorHandler = useErrorHandler();
  let elementToDisplay, weatherComponent: any;
  if (weatherData.data) {
    weatherComponent = (
      <div className="weatherContainer">
        <div className="imageContainer">
          <img src={weatherData.data.weather_icons} alt="weatherImage"></img>
          <div
            data-testid="weather"
            className="precipitation"
          >{`Precipitation: ${weatherData.data.precipitation} %`}</div>
        </div>
        <div className="temperature">{`Temperature: ${weatherData.data.temperature} 'C`}</div>
        <div className="windSpeed">
          {`Wind Speed: ${weatherData.data.wind_speed} Km/Hr`}
        </div>
      </div>
    );
  }

  const handleClick = (index: number, capital: string) => {
    setIndexIsOpen(index);
    searchWeatherData(capital);
  };

  if (countryNames) {
    elementToDisplay = countryNames.data.map(
      (element: CountryDataModel, index: number) => {
        const isShowingWeather = index === indexIsOpen;
        return (
          <div key={element.name.official} className="country">
            <div className="countryCardHeader">{element.name.official}</div>
            <div className="countryCardBody">
              <div className="countryCardLeft">
                <div className="countryCardLeftItem">{`Population: ${element.population}`}</div>
                <div className="countryCardLeftItem">{`Capital: ${element.capital.toString()}`}</div>
                <div className="countryCardLeftItem">{`Lat & Long: ${element.latlng.toString()}`}</div>
                <button
                  onClick={() => handleClick(index, element.capital.toString())}
                  className="btn weatherBtn"
                >
                  Capital Weather
                </button>
              </div>
              <div className="countryCardRight">
                <img
                  className="countryCardImage"
                  src={element.flags.svg}
                  alt={element.flags.alt}
                />
              </div>
            </div>
            <>{isShowingWeather && weatherComponent}</>
          </div>
        );
      }
    );
  }

  if (countryNames.error || weatherData.error) {
    const err = countryNames.error || weatherData.error;
    const error = new Error(err!);
    errorHandler(err);
    throw error;
  }

  return (
    <Loading isLoading={countryNames.loading || weatherData.loading}>
      {<div className="countryContainer">{elementToDisplay}</div>}
    </Loading>
  );
};
//
export default CountryCards;
