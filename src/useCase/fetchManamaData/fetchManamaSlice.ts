import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherManamaData: Record<number, WeatherData>;
    } = { ids: [], weatherManamaData: {}}; 
    
  
  
  const weatherManamadataSlice = createSlice({
    name: 'weatherManamadata',
    initialState,
    reducers: {
      weatherManamaDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherManamaData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherManamaDataFetched } =
  weatherManamadataSlice.actions;
  export default weatherManamadataSlice.reducer;
  
  