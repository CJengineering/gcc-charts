
  import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
  import { AppState } from "../../store";
  import {  WeatherGateway } from "../../interfaces";
  import { weatherRiyadhDataFetched } from "./fetchRiyadhSlice";
  
  type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;
  
  export const fetchRiyadhData = (
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
      const weatherRiyadhData = await weatherGateway.fetchWeatherData(year, month, city);
  
      dispatch(weatherRiyadhDataFetched(weatherRiyadhData));
    };
  };
  
  