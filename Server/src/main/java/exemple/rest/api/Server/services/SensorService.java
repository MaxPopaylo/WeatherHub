package exemple.rest.api.Server.services;

import exemple.rest.api.Server.dtos.ResponseSensorsDto;
import exemple.rest.api.Server.dtos.ResponseWeatherDataDto;
import exemple.rest.api.Server.dtos.SensorDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.entity.WeatherData;
import exemple.rest.api.Server.repositories.SensorRepository;
import exemple.rest.api.Server.utils.exceptions.PaginationException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SensorService {

    private final SensorRepository repository;

    public ResponseSensorsDto findAllData(int pageNo, int pageSize, Sort.Direction direction, String sortBy) {
        Page<Sensor> page = repository.findAll(PageRequest.of(pageNo, pageSize, direction, sortBy));

        if (page.getContent().isEmpty()) {
            throw new PaginationException("Page num " + pageNo + " not found");
        }

        return new ResponseSensorsDto(page.getContent(), page.getNumber(), page.getSize(), page.getTotalPages(), page.isLast());
    }

    public Optional<Sensor> findByName(String name) {
        return repository.findByName(name);
    }

    public Optional<Sensor> findById(int id) {
        return repository.findById(id);
    }

    @Transactional
    public void save(SensorDto dto) {
        Sensor sensor = convertToSensor(dto);
        sensor.setCreationDate(LocalDateTime.now());
        repository.save(sensor);
    }

    public boolean alreadyCreated(SensorDto registerSensorDto) {
        return findByName(registerSensorDto.getName()).isPresent();
    }

    @Transactional
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Transactional
    public void update(int id, Sensor sensor) {
        sensor.setId(id);
        repository.save(sensor);
    }

    private Sensor convertToSensor(SensorDto sensorDto) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(sensorDto, Sensor.class);
    }

}
