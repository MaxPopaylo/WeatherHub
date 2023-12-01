package exemple.rest.api.Server.services;

import exemple.rest.api.Server.dtos.data.CountData;
import exemple.rest.api.Server.dtos.data.ResponseWeatherDataDto;
import exemple.rest.api.Server.dtos.data.WeatherDataDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.entity.WeatherData;
import exemple.rest.api.Server.repositories.WeatherDataRepository;
import exemple.rest.api.Server.utils.exceptions.PaginationException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WeatherDataService {

    private final WeatherDataRepository repository;

    public List<WeatherData> findAllData() {
        return repository.findAll();
    }

    public ResponseWeatherDataDto findAllData(int pageNo, int pageSize,  Sort.Direction direction, String sortBy) {
        Page<WeatherData> page = repository.findAll(PageRequest.of(pageNo, pageSize, direction, sortBy));

        if (page.getContent().isEmpty()) {
            throw new PaginationException("Page num " + pageNo + " not found");
        }

        return new ResponseWeatherDataDto(page.getContent(), page.getNumber(), page.getSize(), page.getTotalPages(), page.isLast());
    }

    public List<WeatherData> findDataBySensor(Sensor sensor) {
        return repository.findAllBySensorOrderByDateDesc(sensor);
    }

    @Transactional
    public void add(WeatherDataDto weatherDataDto, Sensor sensor) {
        WeatherData data = convertToWeatherData(weatherDataDto);
        data.setSensor(sensor);
        data.setDate(LocalDate.now());

        repository.save(data);
    }
    @Transactional
    public CountData findAllCountData() {
        CountData data = new CountData();
        data.setRainingDayCount(repository.findAllByRaining(true).size());
        data.setNotRainingDayCount(repository.findAllByRaining(false).size());
        data.setValueCount(repository.count());

        return data;
    }

    private WeatherData convertToWeatherData(WeatherDataDto weatherDataDto) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(weatherDataDto, WeatherData.class);
    }

}
