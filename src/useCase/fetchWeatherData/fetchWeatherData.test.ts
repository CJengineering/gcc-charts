import "@testing-library/jest-dom";
import {
  hardcodedWeatherData,
  ids,
  testHumidityData,
  testTemperatureAverages,
  testTemperatureMax,
  testTemperatureMin,
  testTemperatureRanges,
} from "../../data/data";
import { InMemoryWeatherDataGateway } from "./fetchWeatherGateway";

import { fetchWeatherData } from "./fetchWeatherData";
import {
  createPresentationHumidity,
  createPresentationMaxTempData,
  createPresentationMinMaxData,
  createPresentationMinTempData,
  createPresentationWeatherData,
} from "../../presentation/createPresentation";
import { buildInitStore, createStore } from "../../store";


it("should fetch temperature average of each city ", async () => {
  const weatherGateway = new InMemoryWeatherDataGateway();

  const store = createStore({ weatherGateway });
  await store.dispatch<any>(fetchWeatherData(1986));
  const presentation = createPresentationWeatherData(store.getState());

  //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)

  expect(presentation.weatherData).toEqual(testTemperatureAverages);
});

it("should return min and max temperature per ", async () => {
  const weatherGateway = new InMemoryWeatherDataGateway();
  const store = createStore(
    { weatherGateway },
    {
      ...buildInitStore(),
      weatherData: { ids: ids, weatherData: hardcodedWeatherData },
    }
  );
  const presentation = createPresentationMinMaxData(store.getState());
  expect(presentation).toEqual(testTemperatureRanges);
});

it(" should return min temperature ", async () => {
  const weatherGateway = new InMemoryWeatherDataGateway();
  const store = createStore(
    { weatherGateway },
    {
      ...buildInitStore(),
      weatherData: { ids: ids, weatherData: hardcodedWeatherData },
    }
  );
  const presentation = createPresentationMinTempData(store.getState());
  expect(presentation.weatherData).toEqual(testTemperatureMin);
});

it(" should return Max temperature ", async () => {
  const weatherGateway = new InMemoryWeatherDataGateway();
  const store = createStore(
    { weatherGateway },
    {
      ...buildInitStore(),
      weatherData: { ids: ids, weatherData: hardcodedWeatherData },
    }
  );
  const presentation = createPresentationMaxTempData(store.getState());
  expect(presentation.weatherData).toEqual(testTemperatureMax);
});

it(" should return  humidity ", async () => {
  const weatherGateway = new InMemoryWeatherDataGateway();
  const store = createStore(
    { weatherGateway },
    {
      ...buildInitStore(),
      weatherData: { ids: ids, weatherData: hardcodedWeatherData },
    }
  );
  const presentation = createPresentationHumidity(store.getState());
  expect(presentation.weatherData).toEqual(testHumidityData);
});
