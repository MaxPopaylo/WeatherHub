package com.example.rest.api.WeatherSensor.controllers;

import com.example.rest.api.WeatherSensor.services.DataGenerationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/generation")
@CrossOrigin(origins = {"http://localhost:8085", "http://localhost:4200"})
public class DataGenerationController {

    private final DataGenerationService dataGenerationService;

    @PostMapping
    public void addSensor() {
       dataGenerationService.init();
    }

    @PostMapping("/{id}")
    public void generateForSensor(@PathVariable int id,
                                  @RequestParam(name = "count", defaultValue = "1") int count) {
        dataGenerationService.generateWeatherDataForSensor(id, count);
    }
}
