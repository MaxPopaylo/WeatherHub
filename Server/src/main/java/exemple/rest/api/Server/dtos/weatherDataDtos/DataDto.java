package exemple.rest.api.Server.dtos.weatherDataDtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class DataDto {

    List<WeatherDataDto> data;
}
