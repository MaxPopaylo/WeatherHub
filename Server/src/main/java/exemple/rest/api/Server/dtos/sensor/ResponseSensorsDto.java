package exemple.rest.api.Server.dtos.sensor;

import exemple.rest.api.Server.entity.Sensor;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ResponseSensorsDto {
    private List<Sensor> sensors;
    public int pageNo;
    public int pageSize;
    public int totalPages;
    public boolean last;
}

