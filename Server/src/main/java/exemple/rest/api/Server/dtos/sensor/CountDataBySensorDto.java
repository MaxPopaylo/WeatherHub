package exemple.rest.api.Server.dtos.sensor;

import exemple.rest.api.Server.entity.Sensor;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CountDataBySensorDto {
    private Sensor sensor;
    public long amount;
}
