import { Component } from '@angular/core';
import {Subject} from "rxjs";
import {DataHandlerService} from "../../service/data-handler.service";
import {Sensor} from "../../model/Sensor";

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent {

  sensors: Sensor[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthChange: false,
      columnDefs: [
        { targets: [1], orderable: false },
        { targets: [2], orderable: false },
      ],
    };
    this.sensors = this.dataHandler.getSensors();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // loadWeatherData(): void {
  //   this.dataHandler.getWeatherData().
  // }

  deleteSensor(id: number): void {
    this.dataHandler.deleteSensor(id);
  }
}
