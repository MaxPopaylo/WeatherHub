package exemple.rest.api.Server.dtos.weatherDataDtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class CountData {

    private int rainingDayCount;
    private int notRainingDayCount;
    private long valueCount;
}
