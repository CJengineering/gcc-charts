
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherMuscatData } from "./createPresentation";
import { fetchMuscatData } from "./fetchMuscatData";



it("should fetch temperature average for Muscat", async () => {
    const weatherMuscatGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherMuscatGateway });
    await store.dispatch<any>(fetchMuscatData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherMuscatData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherMuscatData).toEqual(testTemperatureAverages);
  });
  
  