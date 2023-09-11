

export interface WeatherGateway {
  fetchWeatherData(year:number): Promise<WeatherData[]>;
}
export interface WeatherData {
  id: number;
  name: string;
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number | null;
  precipprob: number;
  precipcover: number;
  preciptype: string | null;
  snow: number | null;
  snowdepth: number | null;
  windgust: number | null;
  windspeed: number;
  winddir: number;
  sealevelpressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number | null;
  solarenergy: number | null;
  uvindex: number | null;
  severerisk: string | null;
  sunrise: string;
  sunset: string;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  stations: number;
  created_at: string;
  updated_at: string;
}
