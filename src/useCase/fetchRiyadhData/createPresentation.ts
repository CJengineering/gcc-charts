import { RootState } from "../../store";
  export type PresentationWeatherRiyadhData = {
      weatherRiyadhData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherRiyadhData = (
      state: RootState
    ): PresentationWeatherRiyadhData => {
      const weatherRiyadhData = state.weatherRiyadhData.weatherRiyadhData;
      const ids = state.weatherRiyadhData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherRiyadhData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherRiyadhData: transformedData, ids: ids };
    };
    export const createPresentationRiyadhByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherRiyadhData.weatherRiyadhData) {
        if (state.weatherRiyadhData.weatherRiyadhData.hasOwnProperty(key)) {
          const day = state.weatherRiyadhData.weatherRiyadhData[key];
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
  