
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherRiyadhData } from "./createPresentation";
import { fetchRiyadhData } from "./fetchRiyadhData";



it("should fetch temperature average for Riyadh", async () => {
    const weatherRiyadhGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherRiyadhGateway });
    await store.dispatch<any>(fetchRiyadhData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherRiyadhData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherRiyadhData).toEqual(testTemperatureAverages);
  });
  
  