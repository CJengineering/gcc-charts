
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherJeddahData } from "./createPresentation";
import { fetchJeddahData } from "./fetchJeddahData";



it("should fetch temperature average for Jeddah", async () => {
    const weatherJeddahGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherJeddahGateway });
    await store.dispatch<any>(fetchJeddahData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherJeddahData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherJeddahData).toEqual(testTemperatureAverages);
  });
  
  