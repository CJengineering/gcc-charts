
  import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
  import { AppState } from "../../store";
  import {  WeatherGateway } from "../../interfaces";
  import { weatherJeddahDataFetched } from "./fetchJeddahSlice";
  
  type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;
  
  export const fetchJeddahData = (
    year: number,
    month: number,
    city: string
  ): ThunkResult<{
      weatherGateway: WeatherGateway;
  }> => {
    return async (
      dispatch: Dispatch<any>,
      _getState,
      {  weatherGateway: weatherGateway}
    ) => {
      const weatherJeddahData = await weatherGateway.fetchWeatherData(year, month, city);
  
      dispatch(weatherJeddahDataFetched(weatherJeddahData));
    };
  };
  
  