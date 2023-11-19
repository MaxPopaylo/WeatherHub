import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, generate, Observable, Subject} from "rxjs";
import {CountData} from "../_model/data/CountData";
import {Sensors} from "../_model/sensors/Sensors";
import {ResponseWeatherData} from "../_model/data/ResponseWeatherData";
import {WeatherData} from "../_model/data/WeatherData";
import {CountDataBySensors} from "../_model/sensors/CountDataBySensors";
import {Sensor} from "../_model/sensors/Sensor";

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

  getAllSensors()  {
   return this.httpClient.get<Sensor[]>(this.SERVER_ROOT_URL + "sensors/all");
  }
  getSensors()  {
    return this.httpClient.get<Sensors>(this.SERVER_ROOT_URL + "sensors/all");
  }

  getSensorsCountData()  {
    return this.httpClient.get<CountDataBySensors[]>(this.SERVER_ROOT_URL + "sensors/count_data");
  }

  deleteSensor(id: number) {
    return this.httpClient.post(this.SERVER_ROOT_URL + "sensors/", {
      id: id
    });
  }

  generate(iteration: number | string) {
    return this.httpClient.post(this.SENSOR_ROOT_URL + "generation/new", {
      "iteration": iteration
    });
  }

}
