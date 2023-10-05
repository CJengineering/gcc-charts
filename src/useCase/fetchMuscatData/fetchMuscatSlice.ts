import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherMuscatData: Record<number, WeatherData>;
    } = { ids: [], weatherMuscatData: {}}; 
    
  
  
  const weatherMuscatdataSlice = createSlice({
    name: 'weatherMuscatdata',
    initialState,
    reducers: {
      weatherMuscatDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherMuscatData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherMuscatDataFetched } =
  weatherMuscatdataSlice.actions;
  export default weatherMuscatdataSlice.reducer;
  
  