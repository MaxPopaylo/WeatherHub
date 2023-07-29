import {EventEmitter, Injectable} from '@angular/core';
import {TestData} from "../data/TestData";
import {WeatherData} from "../model/WeatherData";
import {Sensor} from "../model/Sensor";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private ROOT_URL: string = "http://localhost::8080/main";

  constructor(private httpClient: HttpClient) {
  }

  generate(iteration: number) {
    // this.httpClient.post("http:/localhost::8090/generation/new", {
    //   "iteration": iteration
    // });
  }

  getCountData(): Observable<any> {
     return this.httpClient.get("http:/localhost:8085/api/measurements/count_data");
  }

  getWeatherData(): WeatherData[] {
    return TestData.data;
  }

  getSensors(): Sensor[] {
    return TestData.sensors;
  }

  generateNewData(iteration: number) {

  }

  deleteSensor(id: number): void {
    console.log("Deleted id", id);
  }



}
