import { RootState } from "../../store";
  export type PresentationWeatherMuscatData = {
      weatherMuscatData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherMuscatData = (
      state: RootState
    ): PresentationWeatherMuscatData => {
      const weatherMuscatData = state.weatherMuscatData.weatherMuscatData;
      const ids = state.weatherMuscatData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherMuscatData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherMuscatData: transformedData, ids: ids };
    };
    export const createPresentationMuscatByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherMuscatData.weatherMuscatData) {
        if (state.weatherMuscatData.weatherMuscatData.hasOwnProperty(key)) {
          const day = state.weatherMuscatData.weatherMuscatData[key];
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
  