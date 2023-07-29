package exemple.rest.api.Server.dtos.sensorDtos;

import lombok.Data;

@Data
public class ResponseSensorDto implements SensorDto {

    private long id;
    private String name;
    private long dataCount;
}
