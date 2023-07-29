package exemple.rest.api.Server.services;

import exemple.rest.api.Server.dtos.weatherDataDtos.CountData;
import exemple.rest.api.Server.dtos.weatherDataDtos.DataDto;
import exemple.rest.api.Server.dtos.weatherDataDtos.WeatherDataDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.entity.WeatherData;
import exemple.rest.api.Server.repositories.WeatherDataRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WeatherDataService {

    private final WeatherDataRepository weatherDataRepository;

    @Transactional
    public void add(WeatherDataDto weatherDataDto, Sensor sensor) {
        WeatherData data = convertToWeatherData(weatherDataDto);
        data.setSensor(sensor);

        weatherDataRepository.save(data);
    }

    public DataDto findAllData() {
        List<WeatherDataDto> responseList = new ArrayList<>();
        List<WeatherData> dataList = weatherDataRepository.findAll();
        for (WeatherData data: dataList){
            responseList.add(convertToResponseDataDto(data));
        }

        return new DataDto(responseList);
    }

    public CountData findAllCountData() {
        CountData data = new CountData();
        data.setRainingDayCount(weatherDataRepository.findAllByRaining(true).size());
        data.setNotRainingDayCount(weatherDataRepository.findAllByRaining(false).size());
        data.setValueCount(weatherDataRepository.count());

        return data;
    }


    private WeatherDataDto convertToResponseDataDto(WeatherData weatherData) {
        WeatherDataDto response = new WeatherDataDto();
        response.setValue(weatherData.getValue());
        response.setRaining(weatherData.isRaining());
        response.setSensor_name(weatherData.getSensor().getName());
        response.setDate(weatherData.getDate());

        return response;
    }

    private WeatherData convertToWeatherData(WeatherDataDto weatherDataDto) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(weatherDataDto, WeatherData.class);
    }

}
