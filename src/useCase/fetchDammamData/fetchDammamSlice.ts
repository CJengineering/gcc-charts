import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherDammamData: Record<number, WeatherData>;
    } = { ids: [], weatherDammamData: {}}; 
    
  
  
  const weatherDammamdataSlice = createSlice({
    name: 'weatherDammamdata',
    initialState,
    reducers: {
      weatherDammamDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherDammamData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherDammamDataFetched } =
  weatherDammamdataSlice.actions;
  export default weatherDammamdataSlice.reducer;
  
  