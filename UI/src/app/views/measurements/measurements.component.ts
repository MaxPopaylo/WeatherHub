import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {WeatherData} from "../../model/WeatherData";
import {Subject} from "rxjs";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit, OnDestroy{

  weatherData: WeatherData[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthChange: false
    };
    this.weatherData = this.dataHandler.getWeatherData();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // loadWeatherData(): void {
  //   this.dataHandler.getWeatherData().
  // }

}
