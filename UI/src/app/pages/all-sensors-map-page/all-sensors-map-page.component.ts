import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-all-sensors-map-page',
  templateUrl: './all-sensors-map-page.component.html',
  styleUrls: ['./all-sensors-map-page.component.css']
})
export class AllSensorsMapPageComponent {

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back();
  }
}
