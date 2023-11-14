package com.example.rest.api.WeatherSensor.services;

import com.example.rest.api.WeatherSensor.dtos.SensorsDto;
import com.example.rest.api.WeatherSensor.entity.Sensor;
import com.example.rest.api.WeatherSensor.utils.exceptions.EntityNotFoundExceptions;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class SensorService {

    private final String SENSOR_URL = "http://localhost:8085/api/sensors";

    private final RestTemplate template = new RestTemplate();

    public SensorsDto getSensors() {
        return template.getForObject(SENSOR_URL, SensorsDto.class);
    }

    public Sensor getSensorById(List<Sensor> sensors, int sensor_id) {
        return sensors.stream().filter(sensor -> sensor.getId() == sensor_id).findAny()
                .orElseThrow(EntityNotFoundExceptions::new);
    }

}
