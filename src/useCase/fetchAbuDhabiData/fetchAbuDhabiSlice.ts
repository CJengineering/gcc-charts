import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherAbuDhabiData: Record<number, WeatherData>;
    } = { ids: [], weatherAbuDhabiData: {}}; 
    
  
  
  const weatherAbuDhabidataSlice = createSlice({
    name: 'weatherAbuDhabidata',
    initialState,
    reducers: {
      weatherAbuDhabiDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherAbuDhabiData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherAbuDhabiDataFetched } =
  weatherAbuDhabidataSlice.actions;
  export default weatherAbuDhabidataSlice.reducer;
  
  