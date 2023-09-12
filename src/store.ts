import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rangeSelectorReducer from "./useCase/rangeSelector/rangeSelectorSlice"
import weatherOpositedataReducer from "./useCase/fetchOpositeWeatherData/weatherOpositeDataSlice"
import formValueReducer from "./useCase/formValue/formValueSlice"
import weatherDataReducer from "./useCase/fetchWeatherData/weatherDataSlice";
import { ApiWeatherGateway} from "./useCase/fetchWeatherData/fetchWeatherGateway";
import { ApiWeatherOpositeGateway } from "./useCase/fetchOpositeWeatherData/fetchOposite";
export const rootReducer = combineReducers({
    weatherOpositeData: weatherOpositedataReducer,
  weatherData: weatherDataReducer,
  rangeSelector: rangeSelectorReducer,
  formValue : formValueReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const buildInitStore = (): AppState => ({
  weatherData: { ids: [], weatherData: {}},
  rangeSelector: {status:'year'},
  weatherOpositeData: { ids: [], weatherOpositeData: {}},
  formValue : {status: { year:2022,
    month: 1,
    city: 'Jeddah',
    prevYear: 1986,
    prevMonth:1,
    prevCity:'Jeddah'}}

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
const weatherOpositeGateway = new ApiWeatherOpositeGateway();
export const store = createStore({ weatherGateway, weatherOpositeGateway });// SHOULD BE LIKE THIS AFTER export const store = createStore({ weatherDataGateway, realGateway});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
