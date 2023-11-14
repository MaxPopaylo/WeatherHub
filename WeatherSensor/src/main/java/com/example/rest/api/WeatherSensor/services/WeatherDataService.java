package com.example.rest.api.WeatherSensor.services;

import com.example.rest.api.WeatherSensor.entity.WeatherData;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherDataService {

    private final String DATA_URL = "http://localhost:8085/api/measurements";

    RestTemplate template = new RestTemplate();

    public void add(WeatherData weatherData) {
        template.postForObject(DATA_URL, weatherData, String.class);
    }

}
