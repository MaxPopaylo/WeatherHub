import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataHandlerService } from "../../_services/data-handler.service";
import { WeatherData } from "../../_model/data/WeatherData";
import Popper from "popper.js";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit, OnDestroy {
  public showMessage: boolean = true;
  weatherData: WeatherData[] = [];
  sortOptions = [
    { name: 'Id', value: 'id' },
    { name: 'Temperature', value: 'temperature' },
    { name: 'Raining', value: 'raining' },
    { name: 'Atmospheric Pressure', value: 'atmosphericPressure' },
    { name: 'Humidity', value: 'humidity' }
  ];
  pageSizeOptions = [
    { name: '15', value: '15' },
    { name: '25', value: '25' },
    { name: '50', value: '50' }
  ];

  private pageNo = 0;
  private pageSize = 15;
  private sortBy = 'id';
  private direction = 'desc';

  totalPages: number;
  currentPage: number;
  pgnArray: number[];

  directionImage: string = 'assets/img/sort_asc.png';

  constructor(public dataHandler: DataHandlerService) {
  }



  ngOnInit(): void {
    this.loadWeatherData();
  }

  loadWeatherData(): void {
    const params = {
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      sortBy: this.sortBy,
      direction: this.direction
    };

    this.dataHandler.getWeatherData(params).subscribe(data => {
      this.weatherData = data.data;
      this.totalPages = data.totalPages;
      this.currentPage = data.pageNo;

      this.pgnArray = Array.from({ length: this.totalPages }, (_, index) => index);
    });
  }

  updateParametersAndReload(): void {
    this.loadWeatherData();
  }

  setPageNo(pageNo: number): void {
    this.pageNo = pageNo;
    this.updateParametersAndReload();
  }
  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.setPageNo(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.setPageNo(this.currentPage + 1);
    }
  }


  setPageSize(value: any): void {
    this.pageSize = value;
    this.pageNo = 0;
    this.updateParametersAndReload();
  }

  setSortBy(value: any): void {
    this.sortBy = value;
    this.pageNo = 0;
    this.updateParametersAndReload();
  }

  setDirection(): void {
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    this.directionImage = this.directionImage === 'asc' ? 'assets/img/sort_asc.png' : 'assets/img/sort_desc.png';
    this.pageNo = 0;
    this.updateParametersAndReload();
  }

  ngOnDestroy(): void {
    // this.dtTrigger.unsubscribe();TODO
  }

}
