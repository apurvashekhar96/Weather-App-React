import { CountryDataModel } from "../../models/CountryDataModel";
import { WeatherDataModel } from "../../models/WeatherDataModel";
import { CountryNameActions } from "./actions";
import { WeatherDataActions } from "./actions";
import { CountryNameActionTypes } from "../action-types";
import { WeatherDataActionTypes } from "../action-types/";

interface countryNameState {
  loading: boolean;
  error: string | null;
  data: CountryDataModel[];
}

interface weatherDataState {
  loading: boolean;
  error: string | null;
  data: WeatherDataModel;
}

const initialStateCountry = {
  loading: false,
  error: null,
  data: [],
};
const initialStateWeather = {
  loading: false,
  error: null,
  data: {
    temperature: 0,
    weather_icons: "",
    wind_speed: 0,
    precipitation: 0,
  },
};

const countryNameReducer = (
  state: countryNameState = initialStateCountry,
  action: CountryNameActions
): countryNameState => {
  switch (action.type) {
    case CountryNameActionTypes.SEARCH_COUNTRY: {
      return { loading: true, error: null, data: [] };
    }
    case CountryNameActionTypes.SEARCH_COUNTRY_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }
    case CountryNameActionTypes.SEARCH_COUNTRY_ERROR: {
      return { loading: false, error: action.payload, data: [] };
    }
    default:
      return state;
  }
};

const weatherDataReducer = (
  state: weatherDataState = initialStateWeather,
  action: WeatherDataActions
): weatherDataState => {
  switch (action.type) {
    case WeatherDataActionTypes.SEARCH_WEATHER: {
      return { loading: true, error: null, data: initialStateWeather.data };
    }
    case WeatherDataActionTypes.SEARCH_WEATHER_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }
    case WeatherDataActionTypes.SEARCH_WEATHER_ERROR: {
      return {
        loading: false,
        error: action.payload,
        data: initialStateWeather.data,
      };
    }
    default:
      return state;
  }
};

export { countryNameReducer, weatherDataReducer };
