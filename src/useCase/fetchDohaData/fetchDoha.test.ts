
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherDohaData } from "./createPresentation";
import { fetchDohaData } from "./fetchDohaData";



it("should fetch temperature average for Doha", async () => {
    const weatherDohaGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherDohaGateway });
    await store.dispatch<any>(fetchDohaData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherDohaData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherDohaData).toEqual(testTemperatureAverages);
  });
  
  