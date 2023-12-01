package com.example.rest.api.WeatherSensor.entity;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Data
@Component
public class Sensor {
    private int id;
    private String name;
    private int altitude;
    private Double latitude;
    private Double longitude;
    private LocalDateTime creation_date;
    private LocalDateTime deleteDate;
}
