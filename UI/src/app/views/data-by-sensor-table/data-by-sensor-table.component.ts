import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from "../../_model/data/WeatherData";
import {DataHandlerService} from "../../_services/data-handler.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-data-by-sensor-table',
  templateUrl: './data-by-sensor-table.component.html',
  styleUrls: ['./data-by-sensor-table.component.css']
})
export class DataBySensorTableComponent implements OnInit{
  @Input() data: Observable<WeatherData[]>

  weatherData: WeatherData[] = [];
  pageSizeOptions = [
    { name: '15', value: '15' },
    { name: '25', value: '25' },
    { name: '50', value: '50' }
  ];

  public pageSize = 15;

  constructor(public dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.data.subscribe(data => {
      this.weatherData = data.slice(0, this.pageSize);
    });
  }

  updateParametersAndReload(): void {
    this.loadData();
  }

  setPageSize(value: any): void {
    this.pageSize = value;
    this.updateParametersAndReload();
  }

  ngOnDestroy(): void {
  }



}
