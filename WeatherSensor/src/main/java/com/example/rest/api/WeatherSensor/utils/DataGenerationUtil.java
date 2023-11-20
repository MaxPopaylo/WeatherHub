package com.example.rest.api.WeatherSensor.utils;
import com.example.rest.api.WeatherSensor.entity.Sensor;
import com.example.rest.api.WeatherSensor.entity.WeatherData;

import java.util.Random;

public class DataGenerationUtil {

    public WeatherData generateWeatherData(Sensor sensor) {
        double latitude = sensor.getLatitude();
        double longitude = sensor.getLongitude();
        double altitude = sensor.getAltitude();;

        double temperature = generateRandomTemperature(latitude, longitude, altitude);
        double atmosphericPressure = generateRandomPressure(altitude);
        double humidity = generateRandomHumidity(altitude);
        boolean raining = generateRandomRaining();

        WeatherData weatherData = new WeatherData();
        weatherData.setTemperature(temperature);
        weatherData.setRaining(raining);
        weatherData.setAtmosphericPressure(atmosphericPressure);
        weatherData.setHumidity(humidity);

        weatherData.setSensor_id(sensor.getId());

        return weatherData;
    }

    private double generateRandomTemperature(double latitude, double longitude, double altitude) {
        double baseTemperature = 20.0;

        double altitudeCoefficient = 0.1;
        double latitudeCoefficient = 0.05;
        double longitudeCoefficient = 0.01;

        double temperatureChange = -altitude * altitudeCoefficient - Math.abs(latitude) * latitudeCoefficient - Math.abs(longitude) * longitudeCoefficient;

        double randomFactor = new Random().nextDouble() * 5 - 2.5;

        double generatedTemperature = baseTemperature + temperatureChange + randomFactor;

        if (generatedTemperature < -100.0) {
            return -100.0;
        } else if (generatedTemperature > 100.0) {
            return 100.0;
        } else {
            return generatedTemperature;
        }
    }



    private double generateRandomPressure(double altitude) {
        double basePressure = 1013.25;

        double pressureDecreaseRate = 0.12;

        double pressureChange = -altitude * pressureDecreaseRate;

        double randomFactor = new Random().nextDouble() * 5 - 2.5;

        return basePressure + pressureChange + randomFactor;
    }

    private double generateRandomHumidity(double altitude) {
        double baseHumidity = 70.0;

        double humidityDecreaseRate = 0.2;

        double humidityChange = -altitude * humidityDecreaseRate;

        double randomFactor = new Random().nextDouble() * 10 - 5;

        double generatedHumidity = baseHumidity + humidityChange + randomFactor;

        return Math.max(0.0, Math.min(100.0, generatedHumidity));
    }


    private boolean generateRandomRaining() {
        return new Random().nextBoolean();
    }

}
