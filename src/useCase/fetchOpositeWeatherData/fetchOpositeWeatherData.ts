import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import {  WeatherGateway } from "../../interfaces";
import { weatherOpositeDataFetched } from "./weatherOpositeDataSlice";

type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;

export const fetchOpositeWeatherData = (year:number, month: number, city: string): ThunkResult<{
  weatherGateway: WeatherGateway;
}> => {
  return async (
    dispatch: Dispatch<any>,
    _getState,
    { weatherGateway: weatherGateway }
  ) => {
    console.log("fetchArticles thunk is executing");

    const weatherData = await weatherGateway.fetchWeatherData(year, month, city);
    console.log("Fetched weatherData:", weatherData);

    dispatch(weatherOpositeDataFetched(weatherData));
    console.log("Dispatching articlesFetched:", weatherData);
  };
};
