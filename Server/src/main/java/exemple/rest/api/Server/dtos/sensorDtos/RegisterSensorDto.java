package exemple.rest.api.Server.dtos.sensorDtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;


@Data
public class RegisterSensorDto implements SensorDto {

    @NotNull(message = "Name cannot be empty")
    @Size(min = 2, max = 40, message = "Name size should be between 2 and 40")
    private String name;
}
