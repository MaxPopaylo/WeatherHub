import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Sensor} from "../../../_model/sensors/Sensor";
import * as L from 'leaflet';
import {marker} from "leaflet";

@Component({
  selector: 'app-sensor-map',
  templateUrl: './sensor-map.component.html',
  styleUrls: ['./sensor-map.component.css']
})
export class SensorMapComponent implements OnInit, OnDestroy {
  @Input() sensor: Sensor;
  map: any;

  constructor() {
  }

  ngOnInit(): void {
    this.loadMap(this.sensor.latitude, this.sensor.longitude, this.sensor.name, this.sensor.altitude);
  }

  loadMap(latitude: number, longitude:number, name: string, altitude: number) {
    this.map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const marker = L.marker([latitude, longitude]).addTo(this.map);

    const popupContent = `<strong>${name}</strong><br/>Висота: ${altitude}`;
    marker.bindPopup(popupContent).openPopup();
  }

  private destroyMap() {
    if (this.map) {
      this.map.remove();
    }
  }

  ngOnDestroy(): void {
    this.destroyMap();
  }

}
