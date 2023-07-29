package exemple.rest.api.Server.utils.exceptions;

import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

public class AlreadyCreatedException extends ResponseStatusException {

    public AlreadyCreatedException(HttpStatusCode status, String reason) {
        super(status, reason);
    }
}
