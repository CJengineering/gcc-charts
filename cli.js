// cli.js
import fs from "fs-extra";
const createSlice = (name) => {
  const folderPath = `src/useCase/fetch${name}Data`;
  fs.ensureDirSync(folderPath);

  const content = `import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weather${name}Data: Record<number, WeatherData>;
    } = { ids: [], weather${name}Data: {}}; 
    
  
  
  const weather${name}dataSlice = createSlice({
    name: 'weather${name}data',
    initialState,
    reducers: {
      weather${name}DataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weather${name}Data = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weather${name}DataFetched } =
  weather${name}dataSlice.actions;
  export default weather${name}dataSlice.reducer;
  
  `;

  const sliceFilePath = `${folderPath}/fetch${name}Slice.ts`;
  fs.writeFileSync(sliceFilePath, content);
  console.log(`Created ${sliceFilePath}`);

  const testContent = `
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeather${name}Data } from "./createPresentation";
import { fetch${name}Data } from "./fetch${name}Data";



it("should fetch temperature average for ${name}", async () => {
    const weather${name}Gateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weather${name}Gateway });
    await store.dispatch<any>(fetch${name}Data(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeather${name}Data(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weather${name}Data).toEqual(testTemperatureAverages);
  });
  
  `;

  const testFilePath = `${folderPath}/fetch${name}.test.ts`;
  fs.writeFileSync(testFilePath, testContent);
  console.log(`Created ${testFilePath}`);

  

  const fetchDataThunkContent = `
  import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
  import { AppState } from "../../store";
  import {  WeatherGateway } from "../../interfaces";
  import { weather${name}DataFetched } from "./fetch${name}Slice";
  
  type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;
  
  export const fetch${name}Data = (
    year: number,
    month: number,
    city: string
  ): ThunkResult<{
      weatherGateway: WeatherGateway;
  }> => {
    return async (
      dispatch: Dispatch<any>,
      _getState,
      { weatherGateway: weatherGateway}
    ) => {
      const weather${name}Data = await weatherGateway.fetchWeatherData(year, month, city);
  
      dispatch(weather${name}DataFetched(weather${name}Data));
    };
  };
  
  `;
  const fetchDatThunkPath = `${folderPath}/fetch${name}Data.ts`;
  fs.writeFileSync(fetchDatThunkPath, fetchDataThunkContent);
  console.log(`Created ${fetchDatThunkPath}`);

  const presentationContent = `import { RootState } from "../../store";
  export type PresentationWeather${name}Data = {
      weather${name}Data: number[][];
      ids: number[];
    };
  export const createPresentationWeather${name}Data = (
      state: RootState
    ): PresentationWeather${name}Data => {
      const weather${name}Data = state.weather${name}Data.weather${name}Data;
      const ids = state.weather${name}Data.ids;
      const transformedData = [];
    
      for (const id of ids) {
        const temp = weather${name}Data[id]?.temp;
        if (temp !== undefined) {
          transformedData.push([temp]);
        }
      }
    
      return { weather${name}Data: transformedData, ids: ids };
    };
    export const createPresentation${name}ByWeek = (
      state: RootState
    ): number[][] => {
      const temperatures = [];
    
      // Step 1: Extract temperature values
      for (const key in state.weather${name}Data.weather${name}Data) {
        if (state.weather${name}Data.weather${name}Data.hasOwnProperty(key)) {
          const day = state.weather${name}Data.weather${name}Data[key];
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
  `
  const presentationPath = `${folderPath}/createPresentation.ts`;
  fs.writeFileSync(presentationPath,presentationContent);
  console.log(`Created ${presentationPath}`);
};
const useCaseName = process.argv[2];

if (!useCaseName) {
  console.error("Please provide a name for the use case.");
} else {
  createSlice(useCaseName);
}
