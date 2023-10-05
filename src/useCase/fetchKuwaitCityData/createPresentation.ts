import { RootState } from "../../store";
  export type PresentationWeatherKuwaitCityData = {
      weatherKuwaitCityData: number[][];
      ids: number[];
    };
  export const createPresentationWeatherKuwaitCityData = (
      state: RootState
    ): PresentationWeatherKuwaitCityData => {
      const weatherKuwaitCityData = state.weatherKuwaitCityData.weatherKuwaitCityData;
      const ids = state.weatherKuwaitCityData.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weatherKuwaitCityData[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weatherKuwaitCityData: transformedData, ids: ids };
    };
    export const createPresentationKuwaitCityByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weatherKuwaitCityData.weatherKuwaitCityData) {
        if (state.weatherKuwaitCityData.weatherKuwaitCityData.hasOwnProperty(key)) {
          const day = state.weatherKuwaitCityData.weatherKuwaitCityData[key];
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
  