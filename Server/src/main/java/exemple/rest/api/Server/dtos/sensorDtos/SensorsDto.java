package exemple.rest.api.Server.dtos.sensorDtos;

import lombok.Data;

import java.util.List;

@Data
public class SensorsDto {
    List<ResponseSensorDto> sensors;

    public SensorsDto(List<ResponseSensorDto> sensors) {
        this.sensors = sensors;
    }
}
