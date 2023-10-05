import { RootState } from "../../store";
  export type PresentationWeatherJeddahData = {
      weatherJeddahData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherJeddahData = (
      state: RootState
    ): PresentationWeatherJeddahData => {
      const weatherJeddahData = state.weatherJeddahData.weatherJeddahData;
      const ids = state.weatherJeddahData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherJeddahData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherJeddahData: transformedData, ids: ids };
    };
    export const createPresentationJeddahByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherJeddahData.weatherJeddahData) {
        if (state.weatherJeddahData.weatherJeddahData.hasOwnProperty(key)) {
          const day = state.weatherJeddahData.weatherJeddahData[key];
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
  