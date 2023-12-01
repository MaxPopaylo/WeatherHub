package com.example.rest.api.WeatherSensor.utils.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class EntityNotFoundExceptions extends ResponseStatusException {

    public EntityNotFoundExceptions() {
        super(HttpStatus.NOT_FOUND, "Entity not found");
    }
}
