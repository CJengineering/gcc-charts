import { RootState } from "../../store";
  export type PresentationWeatherAbuDhabiData = {
      weatherAbuDhabiData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherAbuDhabiData = (
      state: RootState
    ): PresentationWeatherAbuDhabiData => {
      const weatherAbuDhabiData = state.weatherAbuDhabiData.weatherAbuDhabiData;
      const ids = state.weatherAbuDhabiData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherAbuDhabiData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherAbuDhabiData: transformedData, ids: ids };
    };
    export const createPresentationAbuDhabiByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherAbuDhabiData.weatherAbuDhabiData) {
        if (state.weatherAbuDhabiData.weatherAbuDhabiData.hasOwnProperty(key)) {
          const day = state.weatherAbuDhabiData.weatherAbuDhabiData[key];
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
  