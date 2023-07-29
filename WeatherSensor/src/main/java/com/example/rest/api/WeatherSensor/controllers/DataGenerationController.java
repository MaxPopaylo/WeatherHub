package com.example.rest.api.WeatherSensor.controllers;

import com.example.rest.api.WeatherSensor.dtos.GenerationDto;
import com.example.rest.api.WeatherSensor.services.DataGenerationService;
import com.example.rest.api.WeatherSensor.services.WeatherDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/generation")
public class DataGenerationController {

    private final DataGenerationService dataGenerationService;
    private final WeatherDataService weatherDataService;

    @PostMapping("/new")
    public void generation(@RequestBody GenerationDto generationDto) {
        dataGenerationService.generate(generationDto);
    }
}
