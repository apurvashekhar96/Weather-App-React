import { CountryDataModel } from "../models/CountryDataModel";
import { WeatherDataModel } from "../models/WeatherDataModel";
import axios from "axios";
import { useErrorHandler } from "react-error-boundary";

export const countryApiFunc = async (term: string) => {
  let processedData: CountryDataModel[] = [];
  await axios
    .get(`https://restcountries.com/v3.1/name/${term}`)
    .then((res) =>
      res.data.forEach((item: any) => {
        processedData = [
          ...processedData,
          {
            name: { official: item.name.official },
            population: item.population,
            capital: [...item.capital],
            latlng: [...item.latlng],
            flags: { svg: item.flags.svg, alt: item.flags.alt },
          },
        ];
      })
    )
    .catch((err) => {
      const error = new Error(err);
      throw error;
    });

  return { processedData };
};

export const weatherApiFunc = async (term: string) => {
  let processedData: WeatherDataModel = {
    temperature: 0,
    weather_icons: "",
    wind_speed: 0,
    precipitation: 0,
  };
  await axios
    .get(
      `http://api.weatherstack.com/current?access_key=b3d631cb59bc8d674ae790968aafd1df&query=${term}`
    )
    .then((res: any) => {
      processedData.precipitation = res.data.current.precip;
      processedData.temperature = res.data.current.temperature;
      processedData.weather_icons = res.data.current.weather_icons[0];
      processedData.wind_speed = res.data.current.wind_speed;
    })
    .catch((err) => {
      const error = new Error(err);
      throw error;
    });
  return { processedData };
};
