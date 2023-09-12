import { WeatherData, WeatherOpositeGateway } from "../../interfaces";

export  class ApiWeatherOpositeGateway implements WeatherOpositeGateway  {
    async fetchWeatherOpositeData(year:number, month: number, city: string): Promise<WeatherData[]> {
 
      const response = await fetch(`https://gcc-api-e4f6j5kdsq-ew.a.run.app/weather_data/by_year?year=${year}&month=${month}&city=${city}`);
      const data: any = await response.json();
      return data;
    }
  }

  export class InMemoryWeatherOpositeDataGateway  implements WeatherOpositeGateway {
    async fetchWeatherOpositeData(): Promise<WeatherData[]> {
      return  [
        {
          id: 4979,
          name: "Abu Dhabi",
          datetime: "1986-08-01T00:00:00.000Z",
          tempmax: 37.3,
          tempmin: 30.1,
          temp: 33.5,
          feelslikemax: 51.6,
          feelslikemin: 37.6,
          feelslike: 45.9,
          dew: 27.8,
          humidity: 73.1,
          precip: null,
          precipprob: 0.0,
          precipcover: 0.0,
          preciptype: null,
          snow: null,
          snowdepth: null,
          windgust: null,
          windspeed: 29.1,
          winddir: 342.7,
          sealevelpressure: 1000.3,
          cloudcover: 33.1,
          visibility: 9.7,
          solarradiation: null,
          solarenergy: null,
          uvindex: null,
          severerisk: null,
          sunrise: "1986-08-01T05:50:38.000Z",
          sunset: "1986-08-01T19:06:42.000Z",
          moonphase: 0.86,
          conditions: "Partially cloudy",
          description: "Partly cloudy throughout the day.",
          icon: "partly-cloudy-day",
          stations: 41216099999,
          created_at: "2023-09-06T09:16:27.004Z",
          updated_at: "2023-09-06T09:16:27.004Z"
        },
        {
          id: 4980,
          name: "Abu Dhabi",
          datetime: "1986-08-02T00:00:00.000Z",
          tempmax: 44.1,
          tempmin: 30.1,
          temp: 35.7,
          feelslikemax: 52.4,
          feelslikemin: 42.4,
          feelslike: 46.4,
          dew: 27.2,
          humidity: 64.9,
          precip: null,
          precipprob: 0.0,
          precipcover: 0.0,
          preciptype: null,
          snow: null,
          snowdepth: null,
          windgust: null,
          windspeed: 25.9,
          winddir: 21.3,
          sealevelpressure: 998.0,
          cloudcover: 29.8,
          visibility: 9.5,
          solarradiation: null,
          solarenergy: null,
          uvindex: null,
          severerisk: null,
          sunrise: "1986-08-02T05:51:05.000Z",
          sunset: "1986-08-02T19:06:07.000Z",
          moonphase: 0.89,
          conditions: "Partially cloudy",
          description: "Partly cloudy throughout the day.",
          icon: "partly-cloudy-day",
          stations: 41216099999,
          created_at: "2023-09-06T09:16:27.007Z",
          updated_at: "2023-09-06T09:16:27.007Z"
        },
        {
          id: 4981,
          name: "Abu Dhabi",
          datetime: "1986-08-03T00:00:00.000Z",
          tempmax: 42.7,
          tempmin: 32.1,
          temp: 35.8,
          feelslikemax: 49.4,
          feelslikemin: 36.4,
          feelslike: 43.4,
          dew: 23.6,
          humidity: 53.0,
          precip: null,
          precipprob: 0.0,
          precipcover: 0.0,
          preciptype: null,
          snow: null,
          snowdepth: null,
          windgust: null,
          windspeed: 30.1,
          winddir: 81.4,
          sealevelpressure: 997.9,
          cloudcover: 16.2,
          visibility: 9.4,
          solarradiation: null,
          solarenergy: null,
          uvindex: null,
          severerisk: null,
          sunrise: "1986-08-03T05:51:33.000Z",
          sunset: "1986-08-03T19:05:31.000Z",
          moonphase: 0.92,
          conditions: "Clear",
          description: "Clear conditions throughout the day.",
          icon: "clear-day",
          stations: 41216099999,
          created_at: "2023-09-06T09:16:27.009Z",
          updated_at: "2023-09-06T09:16:27.009Z"
        }
      ]
      
    }
  
    
  }