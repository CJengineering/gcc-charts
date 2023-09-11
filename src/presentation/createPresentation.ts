import { RootState } from "../store";
export type PresentationWeatherData = {
  weatherData: number[][];
  ids: number[];
};
export type PresentationMinMaxData = number[][];
export type PresentationRangeSelector= {
    status: 'by_year'|'by_month'
}
export const createPresentationWeatherData = (
  state: RootState
): PresentationWeatherData => {
  const weatherData = state.weatherData.weatherData;
  const ids = state.weatherData.ids;
  const transformedData = [];

  for (const id of ids) {
    const temp = weatherData[id]?.temp;
    if (temp !== undefined) {
      transformedData.push([temp]);
    }
  }

  return { weatherData: transformedData, ids: ids };
};
export const createPresentationMinMaxData = (state: RootState): number[][] => {
  const weatherData = state.weatherData.weatherData;
  const ids = state.weatherData.ids;
  const minMaxData = [];

  for (const id of ids) {
    const tempMin = weatherData[id]?.tempmin;
    const tempMax = weatherData[id]?.tempmax;
    if (tempMin !== undefined && tempMax !== undefined) {
      minMaxData.push([tempMin, tempMax]);
    }
  }

  return minMaxData;
};
export const createPresentationRangeSelector = (state: RootState): PresentationRangeSelector => {
    if (state.rangeSelector.status === 'month') {
        return { status: 'by_month' };
    } else {
        return { status: 'by_year' };
    }
};

export const createPresentationMinTempData = (
    state: RootState
  ): PresentationWeatherData => {
    const weatherData = state.weatherData.weatherData;
    const ids = state.weatherData.ids;
    const transformedData = [];
  
    for (const id of ids) {
      const tempmin = weatherData[id]?.tempmin;
      if (tempmin !== undefined) {
        transformedData.push([tempmin]);
      }
    }
  
    return { weatherData: transformedData, ids: ids };
  };
  export const createPresentationMaxTempData  = (
    state: RootState
  ): PresentationWeatherData => {
    const weatherData = state.weatherData.weatherData;
    const ids = state.weatherData.ids;
    const transformedData = [];
  
    for (const id of ids) {
      const tempmax = weatherData[id]?.tempmax;
      if (tempmax !== undefined) {
        transformedData.push([tempmax]);
      }
    }
  
    return { weatherData: transformedData, ids: ids };
  };
  export const createPresentationHumidity =(
    state: RootState
  ): PresentationWeatherData => {
    const weatherData = state.weatherData.weatherData;
    const ids = state.weatherData.ids;
    const transformedData = [];
  
    for (const id of ids) {
      const humidity = weatherData[id]?.humidity;
      if (humidity !== undefined) {
        transformedData.push([humidity]);
      }
    }
  
    return { weatherData: transformedData, ids: ids };
  };