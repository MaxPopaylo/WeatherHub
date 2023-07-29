package com.example.rest.api.WeatherSensor.services;

import com.example.rest.api.WeatherSensor.dtos.GenerationDto;
import com.example.rest.api.WeatherSensor.dtos.WeatherDTO;
import com.example.rest.api.WeatherSensor.entity.Sensor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class DataGenerationService {

    private final WeatherDataService dataService;
    private final Sensor sensor;

    public void generate(GenerationDto dto) {

        for (int i = 0; i < dto.getIteration(); i++) {
             dataService.add(randomDate());
        }
    }

    private WeatherDTO randomDate() {
        WeatherDTO weatherDTO = new WeatherDTO();

        weatherDTO.setValue(new Random().nextInt(91) - 45);
        weatherDTO.setRaining(new Random().nextBoolean());
        weatherDTO.setSensor_name(sensor.getName());
        weatherDTO.setDate(new Date());

        return weatherDTO;
    }

}
