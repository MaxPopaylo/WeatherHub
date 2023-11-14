package com.example.rest.api.WeatherSensor.controllers;

import com.example.rest.api.WeatherSensor.services.DataGenerationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/generation")
@CrossOrigin(origins = "http://localhost:8085")
public class DataGenerationController {

    private final DataGenerationService dataGenerationService;

    @PostMapping
    public void addSensor() {
       dataGenerationService.init();
    }
}
