import { CountryNameActionTypes } from "../../action-types";
import { WeatherDataActionTypes } from "../../action-types";
import { CountryDataModel } from "../../../models/CountryDataModel";
import { WeatherDataModel } from "../../../models/WeatherDataModel";

interface SearchCountryAction {
  type: CountryNameActionTypes.SEARCH_COUNTRY;
}
interface SearchCountrySuccessAction {
  type: CountryNameActionTypes.SEARCH_COUNTRY_SUCCESS;
  payload: CountryDataModel[];
}
interface SearchCountryErrorAction {
  type: CountryNameActionTypes.SEARCH_COUNTRY_ERROR;
  payload: string;
}

//////////////////////////////////////////////////////////////////////////////
interface SearchWeatherAction {
  type: WeatherDataActionTypes.SEARCH_WEATHER;
}
interface SearchWeatherSuccessAction {
  type: WeatherDataActionTypes.SEARCH_WEATHER_SUCCESS;
  payload: WeatherDataModel;
}
interface SearchWeatherErrorAction {
  type: WeatherDataActionTypes.SEARCH_WEATHER_ERROR;
  payload: string;
}

export type CountryNameActions =
  | SearchCountryAction
  | SearchCountrySuccessAction
  | SearchCountryErrorAction;

export type WeatherDataActions =
  | SearchWeatherAction
  | SearchWeatherSuccessAction
  | SearchWeatherErrorAction;
