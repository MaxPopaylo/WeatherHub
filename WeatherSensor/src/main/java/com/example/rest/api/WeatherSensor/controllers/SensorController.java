package com.example.rest.api.WeatherSensor.controllers;

import com.example.rest.api.WeatherSensor.dtos.SensorDto;
import com.example.rest.api.WeatherSensor.entity.Sensor;
import com.example.rest.api.WeatherSensor.services.SensorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sensor")
public class SensorController {

    private final SensorService sensorService;
    private final Sensor sensor;

    @PostMapping("/new")
    public String register() {
        return sensorService.register(new SensorDto(sensor.getName()));
    }

}
