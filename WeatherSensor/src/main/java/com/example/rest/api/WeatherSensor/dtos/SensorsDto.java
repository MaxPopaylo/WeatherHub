package com.example.rest.api.WeatherSensor.dtos;

import com.example.rest.api.WeatherSensor.entity.Sensor;
import lombok.Data;

import java.util.List;

@Data
public class SensorsDto {
    List<Sensor> sensors;
}
