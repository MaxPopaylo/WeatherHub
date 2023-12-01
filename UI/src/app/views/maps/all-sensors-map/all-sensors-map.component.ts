import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sensor } from "../../../_model/sensors/Sensor";
import * as L from 'leaflet';
import {DataHandlerService} from "../../../_services/data-handler.service";

@Component({
  selector: 'app-all-sensors-map',
  templateUrl: './all-sensors-map.component.html',
  styleUrls: ['./all-sensors-map.component.css']
})
export class AllSensorsMapComponent implements OnInit, OnDestroy{
  map: any;
  currentZoom: number = 3; // Initial zoom level

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.getAllSensors().subscribe(sensors => {
      this.loadMap(sensors);
    });
  }

  loadMap(sensors: Sensor[]) {
    if (sensors.length === 0) {
      return;
    }

    const center = [sensors[0].latitude, sensors[0].longitude];

    this.map = L.map('map').setView(center as L.LatLngTuple, this.currentZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.addMarkers(sensors);
  }

  private addMarkers(sensors: Sensor[]) {
    sensors.forEach(snr => {
      const { latitude, longitude, name, altitude } = snr;
      const marker = L.marker([latitude, longitude]).addTo(this.map);

      const popupContent = `<strong>${name}</strong><br/>Altitude: ${altitude}`;
      marker.bindPopup(popupContent);

      marker.on('click', () => {
        this.toggleZoom(); // Toggle between zoom levels
        this.map.setView([latitude, longitude], this.currentZoom);
      });
    });
  }

  private toggleZoom() {
    this.currentZoom = this.currentZoom === 3 ? 15 : 3; // Toggle between default and custom zoom levels
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
