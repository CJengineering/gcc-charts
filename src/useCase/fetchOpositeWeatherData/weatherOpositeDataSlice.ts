import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../interfaces";
export const initialState: {
    ids: number[];
    weatherOpositeData: Record<number, WeatherData>;
  } = { ids: [], weatherOpositeData: {}}; 
  


const weatherOpositedataSlice = createSlice({
  name: 'weatherOpositedata',
  initialState,
  reducers: {
    weatherOpositeDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
        const newWeatherData: Record<number, WeatherData> = {};

        for (const weatherData of action.payload) {
          newWeatherData[weatherData.id] = weatherData;
        }
  
        state.weatherOpositeData = newWeatherData;
        state.ids = [...action.payload.map((weatherData) => weatherData.id)];
      },
   
  },
});



export const { weatherOpositeDataFetched } =
weatherOpositedataSlice.actions;
export default weatherOpositedataSlice.reducer;