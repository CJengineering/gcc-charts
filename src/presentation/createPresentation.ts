import { RootState } from "../store";
export type PresentationWeatherData = {
  weatherData: number[][];
  ids: number[];
};
export type PresentationWeatherOpositeData = {
  weatherOpositeData: number[][];
  ids: number[];
};
export type PresentationMinMaxData = number[][];
export type PresentationRangeSelector = {
  status: "by_year" | "by_month";
};
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
export const createPresentationWeatherOpositeData = (
  state: RootState
): PresentationWeatherOpositeData => {
  const weatherOpositeData = state.weatherOpositeData.weatherOpositeData;
  const ids = state.weatherOpositeData.ids;
  const transformedData = [];

  for (const id of ids) {
    const temp = weatherOpositeData[id]?.temp;
    if (temp !== undefined) {
      transformedData.push([temp]);
    }
  }

  return { weatherOpositeData: transformedData, ids: ids };
};
export const createPresentationOpositeMinMaxData = (
  state: RootState
): number[][] => {
  const weatherData = state.weatherOpositeData.weatherOpositeData;
  const ids = state.weatherOpositeData.ids;
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
export const createPresentationRangeSelector = (
  state: RootState
): PresentationRangeSelector => {
  if (state.rangeSelector.status === "month") {
    return { status: "by_month" };
  } else {
    return { status: "by_year" };
  }
};
export const createPresentationKeyValue = (state: RootState) => {
  return state.keyValue.status;
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
export const createPresentationMaxTempData = (
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
export const createPresentationHumidity = (
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

export const createPresentationByWeek = (state: RootState): number[][] => {
  const temperatures = [];

  for (const key in state.weatherData.weatherData) {
    if (state.weatherData.weatherData.hasOwnProperty(key)) {
      const day = state.weatherData.weatherData[key];
      temperatures.push(day.temp);
    }
  }

  const weeklyAverages = [];

  for (let i = 0; i < temperatures.length; i += 7) {
    const weekTemperatures = temperatures.slice(i, i + 7);
    const averageTemperature = (
      weekTemperatures.reduce((sum, temp) => sum + temp, 0) /
      weekTemperatures.length
    ).toFixed(2);
    weeklyAverages.push([parseFloat(averageTemperature)]);
  }

  const weeklyAveragesArray = weeklyAverages;
  return weeklyAveragesArray;
};
export const createPresentationOpositeByWeek = (
  state: RootState
): number[][] => {
  const temperatures = [];

  // Step 1: Extract temperature values
  for (const key in state.weatherOpositeData.weatherOpositeData) {
    if (state.weatherOpositeData.weatherOpositeData.hasOwnProperty(key)) {
      const day = state.weatherOpositeData.weatherOpositeData[key];
      temperatures.push(day.temp);
    }
  }

  const weeklyAverages = [];

  for (let i = 0; i < temperatures.length; i += 7) {
    const weekTemperatures = temperatures.slice(i, i + 7);
    const averageTemperature = (
      weekTemperatures.reduce((sum, temp) => sum + temp, 0) /
      weekTemperatures.length
    ).toFixed(2);
    weeklyAverages.push([parseFloat(averageTemperature)]);
  }

  // Step 4: Store the weekly averages in an array of arrays
  const weeklyAveragesArray = weeklyAverages;
  return weeklyAveragesArray;
};
export type PresentationFormValue = {
  year: number;
  month: number;
  city: string;
  prevYear: number;
  prevMonth: number;
  prevCity: string;
};
export const createPresentationFormValue = (
  state: RootState
): PresentationFormValue => {
  const year = state.formValue.status.year;
  const month = state.formValue.status.month;
  const city = state.formValue.status.city;
  const prevYear = state.formValue.status.prevYear;
  const prevMonth = state.formValue.status.prevMonth;
  const prevCity = state.formValue.status.prevCity;

  return {
    year: year,
    month: month,
    city: city,
    prevYear: prevYear,
    prevMonth: prevMonth,
    prevCity: prevCity,
  };
};
