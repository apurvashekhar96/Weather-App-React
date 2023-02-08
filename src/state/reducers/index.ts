import { combineReducers } from "redux";

import { countryNameReducer, weatherDataReducer } from "./countryNameReducer";

const reducers = combineReducers({
  countryNames: countryNameReducer,
  weatherData: weatherDataReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
