import {Sensor} from "../model/Sensor";
import {WeatherData} from "../model/WeatherData";
import {CountData} from "../model/CountData";

export class TestData {

  static sensors: Sensor[] = [
    {id: 1, name: "SensorName1", dataCount: 4},
    {id: 2, name: "SensorName2", dataCount: 15},
    {id: 3, name: "SensorName3", dataCount: 20},
    {id: 4, name: "SensorName4", dataCount: 1},
    {id: 5, name: "SensorName5", dataCount: 7},
    {id: 6, name: "SensorName6", dataCount: 2}
  ];

  static data: WeatherData[] = [
    {date: new Date('2015-07-27'), value: 30, raining: true, sensor_name: "SensorName1"},
    {date: new Date('2015-02-27'), value: 20, raining: false, sensor_name: "SensorName2"},
    {date: new Date('2016-07-27'), value: -30, raining: true, sensor_name: "SensorName3"},
    {date: new Date('2016-07-27'), value: -30, raining: true, sensor_name: "SensorName3"},
    {date: new Date('2016-07-27'), value: 25, raining: false, sensor_name: "SensorName4"},
    {date: new Date('2018-01-27'), value: 15, raining: true, sensor_name: "SensorName5"},
    {date: new Date('2018-07-27'), value: -40, raining: false, sensor_name: "SensorName6"},
    {date: new Date('2020-07-27'), value: 39, raining: true, sensor_name: "SensorName7"},
    {date: new Date('2020-04-27'), value: 32, raining: false, sensor_name: "SensorName8"},
    {date: new Date('2021-07-27'), value: 10, raining: true, sensor_name: "SensorName9"},
    {date: new Date('2021-07-27'), value: 8, raining: false, sensor_name: "SensorName10"}
  ];



}
