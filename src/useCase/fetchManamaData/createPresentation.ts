import { RootState } from "../../store";
  export type PresentationWeatherManamaData = {
      weatherManamaData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherManamaData = (
      state: RootState
    ): PresentationWeatherManamaData => {
      const weatherManamaData = state.weatherManamaData.weatherManamaData;
      const ids = state.weatherManamaData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherManamaData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherManamaData: transformedData, ids: ids };
    };
    export const createPresentationManamaByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherManamaData.weatherManamaData) {
        if (state.weatherManamaData.weatherManamaData.hasOwnProperty(key)) {
          const day = state.weatherManamaData.weatherManamaData[key];
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
  