import { RootState } from "../../store";
  export type PresentationWeatherMeccaData = {
      weatherMeccaData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherMeccaData = (
      state: RootState
    ): PresentationWeatherMeccaData => {
      const weatherMeccaData = state.weatherMeccaData.weatherMeccaData;
      const ids = state.weatherMeccaData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherMeccaData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherMeccaData: transformedData, ids: ids };
    };
    export const createPresentationMeccaByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherMeccaData.weatherMeccaData) {
        if (state.weatherMeccaData.weatherMeccaData.hasOwnProperty(key)) {
          const day = state.weatherMeccaData.weatherMeccaData[key];
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
  