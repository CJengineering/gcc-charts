import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import {  WeatherGateway } from "../../interfaces";
import { weatherDubaiDataFetched } from "./fetchDubaiSlice";

type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;

export const fetchDubaiData = (
  year: number,
  month: number,
  city: string
): ThunkResult<{
    weatherGateway: WeatherGateway;
}> => {
  return async (
    dispatch: Dispatch<any>,
    _getState,
    { weatherGateway: weatherGateway }
  ) => {
    const weatherDubaiData = await weatherGateway.fetchWeatherData(year, month, city);

    dispatch(weatherDubaiDataFetched(weatherDubaiData));
  };
};
