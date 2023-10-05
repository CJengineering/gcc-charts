import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherJeddahData: Record<number, WeatherData>;
    } = { ids: [], weatherJeddahData: {}}; 
    
  
  
  const weatherJeddahdataSlice = createSlice({
    name: 'weatherJeddahdata',
    initialState,
    reducers: {
      weatherJeddahDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherJeddahData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherJeddahDataFetched } =
  weatherJeddahdataSlice.actions;
  export default weatherJeddahdataSlice.reducer;
  
  