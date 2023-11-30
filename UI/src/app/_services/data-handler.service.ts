import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {CountData} from "../_model/data/CountData";
import {ResponseSensors} from "../_model/sensors/ResponseSensors";
import {ResponseWeatherData} from "../_model/data/ResponseWeatherData";
import {WeatherData} from "../_model/data/WeatherData";
import {CountDataBySensors} from "../_model/sensors/CountDataBySensors";
import {Sensor} from "../_model/sensors/Sensor";
import {SensorDto} from "../_model/sensors/SensorDto";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private SERVER_ROOT_URL: string = "http://localhost:8085/api/";
  private SENSOR_ROOT_URL: string = "http://localhost:8090/";

  private countData = new BehaviorSubject<CountData | null>(null);
  countData$ = this.countData.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getCountData();
  }

  //WEATHER_DATA

  private getCountData() {
     return this.httpClient.get<CountData>(this.SERVER_ROOT_URL + "measurements/count_data").subscribe(data =>
       this.countData.next(data)
     );
  }

  getWeatherData(params: any)  {
    const httpParams = new HttpParams({
      fromObject: params
    });
    return this.httpClient.get<ResponseWeatherData>(this.SERVER_ROOT_URL + "measurements", {params: httpParams});
  }

  getWeatherAllData()  {
    return this.httpClient.get<WeatherData[]>(this.SERVER_ROOT_URL + "measurements/all");
  }
  getDataBySensor(sensorId: number) {
    const httpParams = new HttpParams().set('sensorId', sensorId);
    return this.httpClient.get<WeatherData[]>(this.SERVER_ROOT_URL + "measurements/sensor",
        {params: httpParams});
  }

  //SENSORS

  getAllSensors()  {
   return this.httpClient.get<Sensor[]>(this.SERVER_ROOT_URL + "sensors/all");
  }

  getSensors(params: any)  {
    const httpParams = new HttpParams({
      fromObject: params
    });
    return this.httpClient.get<ResponseSensors>(this.SERVER_ROOT_URL + "sensors",
        {params: httpParams});
  }

  getSensor(id: number) {
    return this.httpClient.get<Sensor>(this.SERVER_ROOT_URL + "sensors/" + id);
  }

  getSensorsCountData()  {
    return this.httpClient.get<CountDataBySensors[]>(this.SERVER_ROOT_URL + "sensors/count_data");
  }

  registerSensor(dto: SensorDto) {
    return this.httpClient.post(this.SERVER_ROOT_URL + "sensors", dto);
  }

  deleteSensor(id: number) {
    return this.httpClient.delete(this.SERVER_ROOT_URL + "sensors/" + id);
  }

  //GENERATION DATA

  generateDataBySensor(sensorId: number, count: number) {
    const httpParams = new HttpParams().set('count', count);
    return this.httpClient.post(this.SENSOR_ROOT_URL + "generation/" + sensorId,
        {}, {params: httpParams});
  }

}
