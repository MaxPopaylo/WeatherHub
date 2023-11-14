package exemple.rest.api.Server.dtos;

import exemple.rest.api.Server.entity.Sensor;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class ResponseSensorsDto {
    private List<Sensor> sensors;
}
