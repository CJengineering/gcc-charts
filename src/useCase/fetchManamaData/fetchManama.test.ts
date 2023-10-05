
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherManamaData } from "./createPresentation";
import { fetchManamaData } from "./fetchManamaData";



it("should fetch temperature average for Manama", async () => {
    const weatherManamaGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherManamaGateway });
    await store.dispatch<any>(fetchManamaData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherManamaData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherManamaData).toEqual(testTemperatureAverages);
  });
  
  