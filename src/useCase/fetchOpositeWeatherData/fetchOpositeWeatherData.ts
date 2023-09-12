import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import {   WeatherOpositeGateway } from "../../interfaces";
import { weatherOpositeDataFetched } from "./weatherOpositeDataSlice";


type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;

export const fetchOpositWeatherData = (year:number, month: number, city: string): ThunkResult<{
    weatherOpositeGateway : WeatherOpositeGateway;
}> => {
  return async (
    dispatch: Dispatch<any>,
    _getState,
    { weatherOpositeGateway : weatherOpositeGateway }
  ) => {
    console.log("fetchArticles thunk is executing");

    const weatherOpositeData = await weatherOpositeGateway.fetchWeatherOpositeData(year, month, city);
    console.log("Fetched weatherData:", weatherOpositeData);

    dispatch( weatherOpositeDataFetched(weatherOpositeData));
    console.log("Dispatching articlesFetched:", weatherOpositeData);
  };
};
