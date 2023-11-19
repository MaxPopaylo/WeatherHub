package exemple.rest.api.Server.services;

import exemple.rest.api.Server.dtos.sensor.CountDataBySensorDto;
import exemple.rest.api.Server.dtos.sensor.ResponseSensorsDto;
import exemple.rest.api.Server.dtos.sensor.SensorDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.repositories.SensorRepository;
import exemple.rest.api.Server.utils.exceptions.PaginationException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SensorService {

    private final SensorRepository repository;

    public ResponseSensorsDto findAllSensors(int pageNo, int pageSize, Sort.Direction direction, String sortBy) {
        Page<Sensor> page = repository.findAll(PageRequest.of(pageNo, pageSize, direction, sortBy));

        if (page.getContent().isEmpty()) {
            throw new PaginationException("Page num " + pageNo + " not found");
        }

        return new ResponseSensorsDto(page.getContent(), page.getNumber(), page.getSize(), page.getTotalPages(), page.isLast());
    }

    public List<Sensor> findAllSensors() {
        return repository.findAll();
    }

    public Optional<Sensor> findByName(String name) {
        return repository.findByName(name);
    }

    public Optional<Sensor> findById(int id) {
        return repository.findById(id);
    }

    @Transactional
    public List<CountDataBySensorDto> countDataBySensor() {
        return repository.findAll().stream().map(sensor ->
                new CountDataBySensorDto(sensor, sensor.getWeatherDataList().size())).toList();
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
    public void delete(Sensor sensor) {
        sensor.setDeleteDate(LocalDateTime.now());
        repository.save(sensor);
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
