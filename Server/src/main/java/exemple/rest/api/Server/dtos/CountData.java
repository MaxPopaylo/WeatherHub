package exemple.rest.api.Server.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class CountData {

    private int rainingDayCount;
    private int notRainingDayCount;
    private long valueCount;
}
