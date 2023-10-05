
  import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
  import { AppState } from "../../store";
  import {  WeatherGateway } from "../../interfaces";
  import { weatherAbuDhabiDataFetched } from "./fetchAbuDhabiSlice";
  
  type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;
  
  export const fetchAbuDhabiData = (
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
      const weatherAbuDhabiData = await weatherGateway.fetchWeatherData(year, month, city);
  
      dispatch(weatherAbuDhabiDataFetched(weatherAbuDhabiData));
    };
  };
  
  