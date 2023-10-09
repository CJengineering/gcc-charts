import { RootState } from "../../store";
  export type PresentationWeatherDohaData = {
      weatherDohaData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherDohaData = (
      state: RootState
    ): PresentationWeatherDohaData => {
      const weatherDohaData = state.weatherDohaData.weatherDohaData;
      const ids = state.weatherDohaData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherDohaData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherDohaData: transformedData, ids: ids };
    };
    export const createPresentationDohaByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherDohaData.weatherDohaData) {
        if (state.weatherDohaData.weatherDohaData.hasOwnProperty(key)) {
          const day = state.weatherDohaData.weatherDohaData[key];
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
  