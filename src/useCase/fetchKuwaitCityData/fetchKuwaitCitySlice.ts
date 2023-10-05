import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import { WeatherData } from "../../interfaces";
  export const initialState: {
      ids: number[];
      weatherKuwaitCityData: Record<number, WeatherData>;
    } = { ids: [], weatherKuwaitCityData: {}}; 
    
  
  
  const weatherKuwaitCitydataSlice = createSlice({
    name: 'weatherKuwaitCitydata',
    initialState,
    reducers: {
      weatherKuwaitCityDataFetched: (state, action: PayloadAction<WeatherData[]>) => {
          const newWeatherData: Record<number, WeatherData> = {};
  
          for (const weatherData of action.payload) {
            newWeatherData[weatherData.id] = weatherData;
          }
    
          state.weatherKuwaitCityData = newWeatherData;
          state.ids = [...action.payload.map((weatherData) => weatherData.id)];
        },
     
    },
  });
  
  
  
  export const { weatherKuwaitCityDataFetched } =
  weatherKuwaitCitydataSlice.actions;
  export default weatherKuwaitCitydataSlice.reducer;
  
  