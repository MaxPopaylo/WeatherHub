import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {DataHandlerService} from "../../_services/data-handler.service";
import {Sensor} from "../../_model/sensors/Sensor";

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit, OnDestroy{

  sensors?: Sensor[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


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

    this.dataHandler.getSensors().subscribe(data => {
        this.sensors = data.sensors;
        this.dtTrigger.next(this.dtOptions);
      }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteSensor(id: number): void {
    this.dataHandler.deleteSensor(id).subscribe(data =>
      console.log(data)
    );
    this.refreshPage();
  }

  refreshPage() {
    window.location.reload();
  }

}
