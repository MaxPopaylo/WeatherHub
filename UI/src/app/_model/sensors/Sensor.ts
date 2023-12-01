
export interface Sensor {
  id: number;
  name: string;
  altitude: number;
  latitude: number | null;
  longitude: number | null;
  creationDate: Date;
  deleteDate: Date;
}
