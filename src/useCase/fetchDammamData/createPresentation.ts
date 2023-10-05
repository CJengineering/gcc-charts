import { RootState } from "../../store";
  export type PresentationWeatherDammamData = {
      weatherDammamData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherDammamData = (
      state: RootState
    ): PresentationWeatherDammamData => {
      const weatherDammamData = state.weatherDammamData.weatherDammamData;
      const ids = state.weatherDammamData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherDammamData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherDammamData: transformedData, ids: ids };
    };
    export const createPresentationDammamByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherDammamData.weatherDammamData) {
        if (state.weatherDammamData.weatherDammamData.hasOwnProperty(key)) {
          const day = state.weatherDammamData.weatherDammamData[key];
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
  