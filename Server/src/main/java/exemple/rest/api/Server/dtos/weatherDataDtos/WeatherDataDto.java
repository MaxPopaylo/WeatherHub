package exemple.rest.api.Server.dtos.weatherDataDtos;

import lombok.Data;

import java.util.Date;

@Data
public class WeatherDataDto {

    private double value;
    private boolean raining;
    private String sensor_name;
    private Date date;
}
