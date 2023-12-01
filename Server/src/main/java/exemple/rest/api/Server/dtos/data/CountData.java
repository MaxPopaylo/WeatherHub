package exemple.rest.api.Server.dtos.data;

import lombok.Data;

@Data
public class CountData {
    private int rainingDayCount;
    private int notRainingDayCount;
    private long valueCount;
}
