package com.example.rest.api.WeatherSensor.entity;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Data
@Component
public class WeatherData {
    private double temperature;
    private Boolean raining;
    private double atmosphericPressure;
    private double humidity;
    private int sensor_id;
    private LocalDateTime date;
}
