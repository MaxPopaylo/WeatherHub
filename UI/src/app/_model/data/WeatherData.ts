import {Sensor} from "../sensors/Sensor";

export interface WeatherData {
  id: number;
  temperature: number;
  raining: boolean | null;
  atmosphericPressure: number;
  humidity: number;
  date: Date;
  sensor: Sensor;
}
