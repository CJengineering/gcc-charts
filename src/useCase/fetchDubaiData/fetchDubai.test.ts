import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherDubaiData } from "./createPresentation";
import { fetchDubaiData } from "./fetchDubaiData";



it("should fetch temperature average for Dubai", async () => {
    const weatherDubaiGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherDubaiGateway });
    await store.dispatch<any>(fetchDubaiData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherDubaiData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherDubaiData).toEqual(testTemperatureAverages);
  });