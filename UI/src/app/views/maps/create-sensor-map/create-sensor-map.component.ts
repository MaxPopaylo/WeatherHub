import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';
import axios from 'axios';

@Component({
  selector: 'app-create-sensor-map',
  templateUrl: './create-sensor-map.component.html',
  styleUrls: ['./create-sensor-map.component.css']
})
export class CreateSensorMapComponent implements OnInit, OnDestroy {
  @Output() coordinatesClicked = new EventEmitter<{ lat: number, lng: number, nearestPlace: string }>();
  map: any;
  marker: any;

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView([51.505, -0.09], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', (e) => this.onMapClick(e));
  }

  async onMapClick(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    if (this.marker) {
      this.map.removeLayer(this.marker);
    }

    this.marker = L.marker([lat, lng]).addTo(this.map);
    this.marker.bindPopup(`Latitude: ${lat}<br>Longitude: ${lng}`).openPopup();

    const nearestPlace = await this.getNearestPlaceName(lat, lng);

    this.coordinatesClicked.emit({ lat, lng, nearestPlace });
  }

  async getNearestPlaceName(lat: number, lng: number): Promise<string> {
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;

    try {
      const response = await axios.get(nominatimUrl);

      const country = response.data.address.country || 'Unknown Country';
      const city = response.data.address.city || response.data.address.town || response.data.address.village || 'Unknown City';

      return `${country}, ${city}`;
    } catch (error) {
      console.error('Error fetching data from Nominatim:', error);
      return 'Unknown';
    }
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
