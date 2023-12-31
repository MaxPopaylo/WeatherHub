package com.example.rest.api.WeatherSensor.utils.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class ExceptionsHandler {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseError handle(EntityNotFoundExceptions e) {
        log.error(e.getMessage(), e);
        return new ResponseError(HttpStatus.CREATED, e.getMessage());
    }

}