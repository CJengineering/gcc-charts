import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rangeSelectorReducer from "./useCase/rangeSelector/rangeSelectorSlice"
import weatherDataReducer from "./useCase/fetchWeatherData/weatherDataSlice";
import { ApiWeatherGateway} from "./useCase/fetchWeatherData/fetchWeatherGateway";
export const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
  rangeSelector : rangeSelectorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const buildInitStore = (): AppState => ({
  weatherData: { ids: [], weatherData: {}},
  rangeSelector: {status:'year'}

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
export const store = createStore({ weatherGateway });// SHOULD BE LIKE THIS AFTER export const store = createStore({ weatherDataGateway, realGateway});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
