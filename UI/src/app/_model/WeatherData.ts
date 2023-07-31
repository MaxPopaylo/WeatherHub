export class WeatherData {
  value: number;
  raining: boolean;
  date: Date;
  sensor_name: string;

  constructor(value: number, raining: boolean, date: Date, sensor_name: string) {
    this.value = value;
    this.raining = raining;
    this.date = date;
    this.sensor_name = sensor_name;
  }
}
