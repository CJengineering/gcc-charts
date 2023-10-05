
  import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
  import { AppState } from "../../store";
  import {  WeatherGateway } from "../../interfaces";
  import { weatherMeccaDataFetched } from "./fetchMeccaSlice";
  
  type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;
  
  export const fetchMeccaData = (
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
      const weatherMeccaData = await weatherGateway.fetchWeatherData(year, month, city);
  
      dispatch(weatherMeccaDataFetched(weatherMeccaData));
    };
  };
  
  