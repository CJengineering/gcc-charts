
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherMeccaData } from "./createPresentation";
import { fetchMeccaData } from "./fetchMeccaData";



it("should fetch temperature average for Mecca", async () => {
    const weatherMeccaGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherMeccaGateway });
    await store.dispatch<any>(fetchMeccaData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherMeccaData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherMeccaData).toEqual(testTemperatureAverages);
  });
  
  