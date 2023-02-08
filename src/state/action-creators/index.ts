import { CountryNameActions } from "../reducers/actions";
import { WeatherDataActions } from "../reducers/actions";
import { Dispatch } from "redux";
import { CountryNameActionTypes } from "../action-types";
import { WeatherDataActionTypes } from "../action-types";
import { countryApiFunc, weatherApiFunc } from "../../utility/api";
import { myErrorHandler } from "../../components/ErrorBoundary";

export const searchCountryName = (term: string) => {
  return async (dispatch: Dispatch<CountryNameActions>) => {
    dispatch({
      type: CountryNameActionTypes.SEARCH_COUNTRY,
    });
    try {
      const data = await countryApiFunc(term);
      dispatch({
        type: CountryNameActionTypes.SEARCH_COUNTRY_SUCCESS,
        payload: data.processedData,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: CountryNameActionTypes.SEARCH_COUNTRY_ERROR,
          payload: err.message,
        });
      }
    }
  };
};

export const searchWeatherData = (term: string) => {
  return async (dispatch: Dispatch<WeatherDataActions>) => {
    dispatch({
      type: WeatherDataActionTypes.SEARCH_WEATHER,
    });
    try {
      const data = await weatherApiFunc(term);
      dispatch({
        type: WeatherDataActionTypes.SEARCH_WEATHER_SUCCESS,
        payload: data.processedData,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: WeatherDataActionTypes.SEARCH_WEATHER_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
