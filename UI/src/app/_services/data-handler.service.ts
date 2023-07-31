import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, generate, Observable, Subject} from "rxjs";
import {CountData} from "../_model/CountData";
import {Sensors} from "../_model/Sensors";
import {AllWeatherData} from "../_model/AllWeatherData";

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

  getWeatherData()  {
    return this.httpClient.get<AllWeatherData>(this.SERVER_ROOT_URL + "measurements/index");
  }

  getSensors()  {
   return this.httpClient.get<Sensors>(this.SERVER_ROOT_URL + "sensors/index");
  }

  deleteSensor(id: number) {
    return this.httpClient.post(this.SERVER_ROOT_URL + "sensors/delete", {
      id: id
    });
  }

  generate(iteration: number | string) {
    return this.httpClient.post(this.SENSOR_ROOT_URL + "generation/new", {
      "iteration": iteration
    });
  }

}
