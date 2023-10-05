
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherAbuDhabiData } from "./createPresentation";
import { fetchAbuDhabiData } from "./fetchAbuDhabiData";



it("should fetch temperature average for AbuDhabi", async () => {
    const weatherAbuDhabiGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherAbuDhabiGateway });
    await store.dispatch<any>(fetchAbuDhabiData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherAbuDhabiData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherAbuDhabiData).toEqual(testTemperatureAverages);
  });
  
  