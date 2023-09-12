import { testTemperatureAverages } from "../../data/data";
import { createPresentationWeatherOpositeData } from "../../presentation/createPresentation";
import { createStore } from "../../store";
import { InMemoryWeatherOpositeDataGateway } from "./fetchOposite";
import { fetchOpositWeatherData } from "./fetchOpositeWeatherData";
it("should fetch temperature average of each city ", async () => {
    const weatherOpositeGateway = new InMemoryWeatherOpositeDataGateway();
  
    const store = createStore({ weatherOpositeGateway });
    await store.dispatch<any>(fetchOpositWeatherData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherOpositeData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherOpositeData).toEqual(testTemperatureAverages);
  });
