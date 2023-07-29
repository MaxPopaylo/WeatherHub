package com.example.rest.api.WeatherSensor.entity;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Data
@Component
public class Sensor {

    @Value("${sensor.properties.name}")
    private String name;
}
