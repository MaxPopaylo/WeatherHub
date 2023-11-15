package com.example.rest.api.WeatherSensor.services;

import com.example.rest.api.WeatherSensor.entity.Sensor;
import com.example.rest.api.WeatherSensor.entity.WeatherData;
import com.example.rest.api.WeatherSensor.utils.DataGenerationUtil;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@EnableScheduling
@EnableAsync
public class DataGenerationService {

    private final WeatherDataService weatherDataService;
    private final SensorService sensorService;

    private List<Sensor> sensors;
    private final int TIMEOUT_PERIOD = 5;

    @PostConstruct
    public void init() {
        sensors = sensorService.getSensors().getSensors();
        generateWeatherDataForAllSensors();
    }

    @Async
    @Scheduled(cron = "0 */" + TIMEOUT_PERIOD + " * * * ?")
    public void generateWeatherDataForAllSensors() {
        for (Sensor sensor : sensors) {
            generateWeatherDataForSensor(sensor.getId());
        }
    }

    private void generateWeatherDataForSensor(int sensorId) {
        Sensor sensor = sensorService.getSensorById(sensors, sensorId);
        WeatherData data = new DataGenerationUtil().generateWeatherData(sensor);
        weatherDataService.add(data);
    }

}
