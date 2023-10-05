
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherDammamData } from "./createPresentation";
import { fetchDammamData } from "./fetchDammamData";



it("should fetch temperature average for Dammam", async () => {
    const weatherDammamGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherDammamGateway });
    await store.dispatch<any>(fetchDammamData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherDammamData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherDammamData).toEqual(testTemperatureAverages);
  });
  
  