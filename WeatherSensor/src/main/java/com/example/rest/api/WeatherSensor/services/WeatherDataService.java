package com.example.rest.api.WeatherSensor.services;

import com.example.rest.api.WeatherSensor.dtos.WeatherDTO;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherDataService {

    private final String ADD_DATA_URL = "http://localhost:8085/api/measurements/add";

    RestTemplate template = new RestTemplate();

    public void add(WeatherDTO weatherDTO) {
        template.postForObject(ADD_DATA_URL, weatherDTO, String.class);
    }

}
