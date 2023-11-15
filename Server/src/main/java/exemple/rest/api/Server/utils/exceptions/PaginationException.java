package exemple.rest.api.Server.utils.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

public class PaginationException extends ResponseStatusException {

    public PaginationException(String reason) {
        super(HttpStatus.BAD_REQUEST, reason);
    }
}
