import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherRiyadhData: Record<number, WeatherData>;
    } = { ids: [], weatherRiyadhData: {}}; 
    
  
  
  const weatherRiyadhdataSlice = createSlice({
    name: 'weatherRiyadhdata',
    initialState,
    reducers: {
      weatherRiyadhDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherRiyadhData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherRiyadhDataFetched } =
  weatherRiyadhdataSlice.actions;
  export default weatherRiyadhdataSlice.reducer;
  
  