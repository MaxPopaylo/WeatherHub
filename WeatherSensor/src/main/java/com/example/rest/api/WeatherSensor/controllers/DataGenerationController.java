package com.example.rest.api.WeatherSensor.controllers;

import com.example.rest.api.WeatherSensor.dtos.GenerationDto;
import com.example.rest.api.WeatherSensor.services.DataGenerationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/generation")
@CrossOrigin(origins = "http://localhost:4200")
public class DataGenerationController {

    private final DataGenerationService dataGenerationService;

    @PostMapping("/new")
    public void generation(@RequestBody GenerationDto generationDto) {
        dataGenerationService.generate(generationDto);
    }
}
