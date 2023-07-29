package com.example.rest.api.WeatherSensor.services;

import com.example.rest.api.WeatherSensor.dtos.SensorDto;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SensorService {

    private final String REGISTER_SENSOR_URL = "http://localhost:8085/api/sensors/register";

    private final RestTemplate template = new RestTemplate();

    public String register(SensorDto sensorDto) {
        return template.postForObject(REGISTER_SENSOR_URL, sensorDto, String.class);
    }

}
