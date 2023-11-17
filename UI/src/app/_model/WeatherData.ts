import {Sensor} from "./Sensor";

export interface WeatherData {
  id: number;
  temperature: number;
  raining: boolean | null;
  atmosphericPressure: number;
  humidity: number;
  date: Date;
  sensor: Sensor;
}
