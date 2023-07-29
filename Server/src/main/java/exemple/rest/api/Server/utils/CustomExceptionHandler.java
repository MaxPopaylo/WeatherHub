package exemple.rest.api.Server.utils;

import exemple.rest.api.Server.utils.exceptions.AlreadyCreatedException;
import exemple.rest.api.Server.utils.exceptions.CustomNotFoundException;
import exemple.rest.api.Server.utils.exceptions.CustomValidationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class CustomExceptionHandler {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseError handle(AlreadyCreatedException e) {
        log.error(e.getMessage(), e);
        return new ResponseError(HttpStatus.CREATED, e.getMessage());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseError handle(CustomNotFoundException e) {
        log.error(e.getMessage(), e);
        return new ResponseError(HttpStatus.NOT_FOUND, e.getMessage());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseError handle(CustomValidationException e) {
        log.error(e.getMessage(), e);
        return new ResponseError(HttpStatus.BAD_REQUEST, e.getMessage());
    }

}
