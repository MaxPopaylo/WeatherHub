import {Component, OnInit} from '@angular/core';
import {Sensor} from "../../_model/sensors/Sensor";
import {DataHandlerService} from "../../_services/data-handler.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Subscription} from "rxjs";
import { Location } from '@angular/common';
import {WeatherData} from "../../_model/data/WeatherData";

@Component({
  selector: 'app-show-sensor',
  templateUrl: './show-sensor.component.html',
  styleUrls: ['./show-sensor.component.css']
})
export class ShowSensorComponent implements OnInit {
  sub :Subscription;
  sensor: Sensor;
  sensorId : any;

  private data = new BehaviorSubject<WeatherData[] | null>(null);
  data$ = this.data.asObservable();

  constructor(private route: ActivatedRoute, private dataHandler: DataHandlerService, private location: Location) {
  }

  loadData() {
    this.sensorId = this.route.snapshot.paramMap.get('id');
    this.dataHandler.getSensor(this.sensorId).subscribe(sensor => {
      this.sensor = sensor;
    });

    this.dataHandler.getDataBySensor(this.sensorId).subscribe(data => {
      this.data.next(data);
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  goBack() {
    this.location.back();
  }

  delete() {
    const result = window.confirm("Are you sure you want to remove this sensor?");

    if (result) {
      this.dataHandler.deleteSensor(this.sensorId).subscribe();
      this.location.back();
    }
  }

  generate() {
    const userInput = prompt('Please enter a data count:');
    let count = parseFloat(userInput);

    if (count > 0) {
      this.dataHandler.generateDataBySensor(this.sensorId, count).subscribe();
    }
  }

}
