package exemple.rest.api.Server.dtos;

import exemple.rest.api.Server.entity.Sensor;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

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
