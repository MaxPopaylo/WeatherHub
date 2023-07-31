import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataHandlerService} from "../../_services/data-handler.service";
import {Subject} from "rxjs";
import {WeatherData} from "../../_model/WeatherData";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit, OnDestroy{

  weatherData: WeatherData[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
      scrollY: '400px',
      searching: true,
      info: false,
      scrollCollapse: true,
      ordering: false
    };

    this.dataHandler.getWeatherData().subscribe(data => {
        this.weatherData = data.data;
        this.dtTrigger.next(this.dtOptions);
      }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
