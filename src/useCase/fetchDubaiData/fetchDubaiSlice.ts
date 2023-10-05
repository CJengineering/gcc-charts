import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../interfaces";
export const initialState: {
    ids: number[];
    weatherDubaiData: Record<number, WeatherData>;
  } = { ids: [], weatherDubaiData: {}}; 
  


const weatherDubaidataSlice = createSlice({
  name: 'weatherDubaidata',
  initialState,
  reducers: {
    weatherDubaiDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
        const newWeatherData: Record<number, WeatherData> = {};

        for (const weatherData of action.payload) {
          newWeatherData[weatherData.id] = weatherData;
        }
  
        state.weatherDubaiData = newWeatherData;
        state.ids = [...action.payload.map((weatherData) => weatherData.id)];
      },
   
  },
});



export const { weatherDubaiDataFetched } =
weatherDubaidataSlice.actions;
export default weatherDubaidataSlice.reducer;