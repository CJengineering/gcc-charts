import { testTemperatureAverages } from "../../data/data";
import { createPresentationWeatherOpositeData } from "../../presentation/createPresentation";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { fetchOpositeWeatherData} from "./fetchOpositeWeatherData";
it("should fetch temperature average of each Oposite city ", async () => {
    const weatherGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherGateway });
    await store.dispatch<any>(fetchOpositeWeatherData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherOpositeData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherOpositeData).toEqual(testTemperatureAverages);
  });
