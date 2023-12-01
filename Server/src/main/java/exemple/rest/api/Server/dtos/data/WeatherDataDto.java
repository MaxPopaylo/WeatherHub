package exemple.rest.api.Server.dtos.data;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;


@Data
public class WeatherDataDto {

    @NotNull(message = "Temperature cannot be empty")
    @Min(value = -100, message = "Temperature cannot be less than -100")
    @Max(value = 100, message = "Temperature cannot be more than 100")
    private Double temperature;

    @NotNull(message = "Raining cannot be empty")
    private Boolean raining;

    @NotNull(message = "Raining cannot be empty")
    private Double atmosphericPressure;
    private Double humidity;

    @NotNull(message = "Raining cannot be empty")
    private int sensor_id;
}
