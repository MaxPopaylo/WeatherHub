import {WeatherData} from "./WeatherData";

export interface ResponseWeatherData {
  data: WeatherData[];
  pageNo: number;
  pageSize: number;
  totalPages: number;
  last: boolean;
}
