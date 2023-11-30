import { Component } from '@angular/core';
import {SensorDto} from "../../_model/sensors/SensorDto";
import {DataHandlerService} from "../../_services/data-handler.service";

@Component({
  selector: 'app-register-sensor-page',
  templateUrl: './register-sensor-page.component.html',
  styleUrls: ['./register-sensor-page.component.css']
})


export class RegisterSensorPageComponent {
  dto: SensorDto;

  currentStep = 0;
  clickedCoordinates: { lat: number, lng: number, nearestPlace: string };
  altitude: number;

  isCreated: boolean;

  constructor(private dataHandler: DataHandlerService) {
  }

  nextStep() {
    this.currentStep += 1;
  }

  prevStep() {
    this.currentStep -= 1;
  }

  onMapCoordinatesClick(coordinates: { lat: number, lng: number, nearestPlace: string }) {
    this.clickedCoordinates = coordinates;
  }

  register() {
    this.dto = new SensorDto(this.clickedCoordinates.lat, this.clickedCoordinates.lng, this.clickedCoordinates.nearestPlace, this.altitude);
    this.dataHandler.registerSensor(this.dto).subscribe();
    this.nextStep();
  }


}
