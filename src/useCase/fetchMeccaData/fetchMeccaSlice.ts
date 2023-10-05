import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherMeccaData: Record<number, WeatherData>;
    } = { ids: [], weatherMeccaData: {}}; 
    
  
  
  const weatherMeccadataSlice = createSlice({
    name: 'weatherMeccadata',
    initialState,
    reducers: {
      weatherMeccaDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherMeccaData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherMeccaDataFetched } =
  weatherMeccadataSlice.actions;
  export default weatherMeccadataSlice.reducer;
  
  