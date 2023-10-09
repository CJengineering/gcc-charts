import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherDohaData: Record<number, WeatherData>;
    } = { ids: [], weatherDohaData: {}}; 
    
  
  
  const weatherDohadataSlice = createSlice({
    name: 'weatherDohadata',
    initialState,
    reducers: {
      weatherDohaDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherDohaData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherDohaDataFetched } =
  weatherDohadataSlice.actions;
  export default weatherDohadataSlice.reducer;
  
  