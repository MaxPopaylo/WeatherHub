import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../_services/data-handler.service";
import {Sensor} from "../../_model/sensors/Sensor";


@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit{
  sensors: Sensor[] = [];
  sortOptions = [
    { name: 'Creation Date', value: 'creationDate' },
    { name: 'Name', value: 'name' },
    { name: 'Altitude', value: 'altitude' },
  ];
  pageSizeOptions = [
    { name: '6', value: '6' },
    { name: '9', value: '9' },
    { name: '12', value: '12' }
  ];

  private pageNo = 0;
  private pageSize = 9;
  private sortBy = 'creationDate';
  private direction = 'desc';

  totalPages: number;
  currentPage: number;
  pgnArray: number[] = [];

  directionImage: string = 'assets/img/sort_asc.png';

  constructor(public dataHandler: DataHandlerService) {
    this.loadSensors();
  }

  ngOnInit(): void {
    this.loadSensors();
  }

  loadSensors(): void {
    const params = {
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      sortBy: this.sortBy,
      direction: this.direction
    };

    this.dataHandler.getSensors(params).subscribe(data => {
      this.sensors = data.sensors;
      this.totalPages = data.totalPages;
      this.currentPage = data.pageNo;

      this.pgnArray = Array.from({ length: this.totalPages }, (_, index) => index);
    });

  }

  updateParametersAndReload(): void {
    this.loadSensors();
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

}
