import { RootState } from "../../store";
export type PresentationWeatherDubaiData = {
    weatherDubaiData: number[][];
    ids: number[];
  };
export const createPresentationWeatherDubaiData = (
    state: RootState
  ): PresentationWeatherDubaiData => {
    const weatherDubaiData = state.weatherDubaiData.weatherDubaiData;
    const ids = state.weatherDubaiData.ids;
    const transformedData = [];
  
    for (const id of ids) {
      const temp = weatherDubaiData[id]?.temp;
      if (temp !== undefined) {
        transformedData.push([temp]);
      }
    }
  
    return { weatherDubaiData: transformedData, ids: ids };
  };
  export const createPresentationDubaiByWeek = (
    state: RootState
  ): number[][] => {
    const temperatures = [];
  
    // Step 1: Extract temperature values
    for (const key in state.weatherDubaiData.weatherDubaiData) {
      if (state.weatherDubaiData.weatherDubaiData.hasOwnProperty(key)) {
        const day = state.weatherDubaiData.weatherDubaiData[key];
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