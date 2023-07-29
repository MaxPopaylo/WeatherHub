package com.example.rest.api.WeatherSensor.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class WeatherDTO {

    private double value;
    private boolean raining;
    private String sensor_name;
    private Date date;
}
