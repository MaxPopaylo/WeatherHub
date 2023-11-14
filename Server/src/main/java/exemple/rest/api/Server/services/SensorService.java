package exemple.rest.api.Server.services;

import exemple.rest.api.Server.dtos.SensorDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.repositories.SensorRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
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

    public List<Sensor> findAllSensors() {
        List<Sensor> objects = repository.findAll();
        return repository.findAll();
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
