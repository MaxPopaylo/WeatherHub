package exemple.rest.api.Server.utils.exceptions;

import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

public class CustomNotFoundException extends ResponseStatusException {

    public CustomNotFoundException(HttpStatusCode status, String reason) {
        super(status, reason);
    }
}
