package exemple.rest.api.Server.dtos;

import exemple.rest.api.Server.entity.WeatherData;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ResponseWeatherDataDto {
    public List<WeatherData> data;
    public int pageNo;
    public int pageSize;
    public int totalPages;
    public boolean last;
}
