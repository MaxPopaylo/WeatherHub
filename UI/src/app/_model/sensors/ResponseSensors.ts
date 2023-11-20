import {Sensor} from "./Sensor";

export interface ResponseSensors {
  sensors: Sensor[];
  pageNo: number;
  pageSize: number;
  totalPages: number;
  last: boolean;
}
