
  import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
  import { AppState } from "../../store";
  import {  WeatherGateway } from "../../interfaces";
  import { weatherKuwaitCityDataFetched } from "./fetchKuwaitCitySlice";
  
  type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;
  
  export const fetchKuwaitCityData = (
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
      const weatherKuwaitCityData = await weatherGateway.fetchWeatherData(year, month, city);
  
      dispatch(weatherKuwaitCityDataFetched(weatherKuwaitCityData));
    };
  };
  
  