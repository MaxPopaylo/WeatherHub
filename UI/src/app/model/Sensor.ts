import {WeatherData} from "./WeatherData";

export class Sensor {
  id: number;
  name: string;
  dataCount: number;


  constructor(id: number, name: string, dataCount: number) {
    this.id = id;
    this.name = name;
    this.dataCount = dataCount;
  }
}
