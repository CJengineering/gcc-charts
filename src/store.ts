import { combineReducers, configureStore } from "@reduxjs/toolkit";
import keyValueReducer from "./useCase/keyValue/keyValueSlice";
import rangeSelectorReducer from "./useCase/rangeSelector/rangeSelectorSlice";
import weatherOpositedataReducer from "./useCase/fetchOpositeWeatherData/weatherOpositeDataSlice";
import weatherJeddahataReducer from "./useCase/fetchJeddahData/fetchJeddahSlice";
import weatherKuwaitCitydataReducer from "./useCase/fetchKuwaitCityData/fetchKuwaitCitySlice";
import weatherManamadataReducer from "./useCase/fetchManamaData/fetchManamaSlice";
import weatherMuscatdataReducer from "./useCase/fetchMuscatData/fetchMuscatSlice";
import weatherRiyadhdataReducer from "./useCase/fetchRiyadhData/fetchRiyadhSlice";
import  weatherAbhuDhabidataReducer from "./useCase/fetchAbuDhabiData/fetchAbuDhabiSlice";
import weatherDammamdataReducer from "./useCase/fetchDammamData/fetchDammamSlice";
import weatherMeccadataReducer from "./useCase/fetchMeccaData/fetchMeccaSlice";
import weatherDubaidataReducer from "./useCase/fetchDubaiData/fetchDubaiSlice";
import formValueReducer from "./useCase/formValue/formValueSlice";
import weatherDataReducer from "./useCase/fetchWeatherData/weatherDataSlice";
import { ApiWeatherGateway } from "./useCase/fetchWeatherData/fetchWeatherGateway";
export const rootReducer = combineReducers({
  weatherOpositeData: weatherOpositedataReducer,
  weatherData: weatherDataReducer,
  rangeSelector: rangeSelectorReducer,
  formValue: formValueReducer,
  keyValue: keyValueReducer,
  weatherDubaiData: weatherDubaidataReducer,
  weatherMeccaData: weatherMeccadataReducer,
  weatherDammamData: weatherDammamdataReducer,
  weatherJeddahData: weatherJeddahataReducer,
  weatherKuwaitCityData: weatherKuwaitCitydataReducer,
  weatherManamaData: weatherManamadataReducer,
  weatherMuscatData: weatherMuscatdataReducer,
  weatherRiyadhData: weatherRiyadhdataReducer,
  weatherAbuDhabiData: weatherAbhuDhabidataReducer,


});

export type AppState = ReturnType<typeof rootReducer>;

export const buildInitStore = (): AppState => ({
  weatherData: { ids: [], weatherData: {} },
  rangeSelector: { status: "year" },
  weatherOpositeData: { ids: [], weatherOpositeData: {} },
  weatherDubaiData: { ids: [], weatherDubaiData: {} },
  weatherMeccaData: { ids: [], weatherMeccaData: {} },
  weatherDammamData: { ids: [], weatherDammamData: {} },
  weatherJeddahData: { ids: [], weatherJeddahData: {} },
  weatherKuwaitCityData: { ids: [], weatherKuwaitCityData: {} },
  weatherManamaData: { ids: [], weatherManamaData: {} },
  weatherMuscatData: { ids: [], weatherMuscatData: {} },
  weatherRiyadhData: { ids: [], weatherRiyadhData: {} },
  weatherAbuDhabiData: { ids: [], weatherAbuDhabiData: {} },
 
  keyValue: { status: 0 },
  formValue: {
    status: {
      year: 2022,
      month: 1,
      city: "Jeddah",
      prevYear: 2022,
      prevMonth: 1,
      prevCity: "Dubai",
    },
  },
});

export const createStore = (dependencies: unknown, hydrate?: AppState) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: dependencies } }),
    preloadedState: hydrate ?? buildInitStore(),
  });
// add tghe real onne later const articleGateway = new ApiArticleGateway();
// ALWAYS INSTANCE NAME MUST MATCH DEPENDENCIES IN THE FEATURE
const weatherGateway = new ApiWeatherGateway();


export const store = createStore({ weatherGateway}); // SHOULD BE LIKE THIS AFTER export const store = createStore({ weatherDataGateway, realGateway});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
