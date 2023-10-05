
  import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
  import { AppState } from "../../store";
  import {  WeatherGateway } from "../../interfaces";
  import { weatherMuscatDataFetched } from "./fetchMuscatSlice";
  
  type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;
  
  export const fetchMuscatData = (
    year: number,
    month: number,
    city: string
  ): ThunkResult<{
      weatherGateway: WeatherGateway;
  }> => {
    return async (
      dispatch: Dispatch<any>,
      _getState,
      { weatherGateway: weatherGateway}
    ) => {
      const weatherMuscatData = await weatherGateway.fetchWeatherData(year, month, city);
  
      dispatch(weatherMuscatDataFetched(weatherMuscatData));
    };
  };
  
  