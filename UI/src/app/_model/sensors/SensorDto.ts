export class SensorDto {
  constructor(lat: number, lng: number, nearestPlace: string, altitude: number) {
    this.name = nearestPlace;
    this.altitude = altitude;
    this.latitude = lat;
    this.longitude = lng;
  }

  name: string;
  altitude: number;
  latitude: number | null;
  longitude: number | null;
}
