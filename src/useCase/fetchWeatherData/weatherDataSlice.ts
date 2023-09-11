import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../interfaces";
export const initialState: {
    ids: number[];
    weatherData: Record<number, WeatherData>;
  } = { ids: [], weatherData: {}}; 
  


const weatherdataSlice = createSlice({
  name: 'weatherdata',
  initialState,
  reducers: {
    weatherDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
      console.log('weatherDataFetched reducer is called'); 
      for (const weatherData of action.payload) {
        state.weatherData[weatherData.id] = weatherData;
      }
      state.ids = [...action.payload.map((weatherData) => weatherData.id)];
    },
   
  },
});



export const { weatherDataFetched } =
  weatherdataSlice.actions;
export default weatherdataSlice.reducer;