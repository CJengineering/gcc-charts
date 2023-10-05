
  import { testTemperatureAverages } from "../../data/data";
import { createStore } from "../../store";
import { InMemoryWeatherDataGateway } from "../fetchWeatherData/fetchWeatherGateway";
import { createPresentationWeatherKuwaitCityData } from "./createPresentation";
import { fetchKuwaitCityData } from "./fetchKuwaitCityData";



it("should fetch temperature average for KuwaitCity", async () => {
    const weatherKuwaitCityGateway = new InMemoryWeatherDataGateway();
  
    const store = createStore({ weatherKuwaitCityGateway });
    await store.dispatch<any>(fetchKuwaitCityData(1986, 1, 'Jeddah'));
    const presentation = createPresentationWeatherKuwaitCityData(store.getState());
  
    //expect(presentation.wheatherData.temmperatures.average).toEqual(temperatureAverages)
  
    expect(presentation.weatherKuwaitCityData).toEqual(testTemperatureAverages);
  });
  
  