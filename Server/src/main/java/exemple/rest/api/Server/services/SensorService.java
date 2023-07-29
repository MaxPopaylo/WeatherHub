package exemple.rest.api.Server.services;

import exemple.rest.api.Server.dtos.sensorDtos.*;
import exemple.rest.api.Server.dtos.weatherDataDtos.DataDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.repositories.SensorRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SensorService {

    private final SensorRepository sensorRepository;

    public SensorsDto findAllSensors() {
        List<ResponseSensorDto> responseList = new ArrayList<>();
        List<Sensor> sensorList = sensorRepository.findAll();
        for (Sensor sensor: sensorList){
            responseList.add(convertToResponseDataDto(sensor));
        }

        return new SensorsDto(responseList);
    }

    public Optional<Sensor> findByName(String name) {
        return sensorRepository.findByName(name);
    }

    public Optional<Sensor> findById(long id) {
        return sensorRepository.findById(id);
    }

    @Transactional
    public void save(RegisterSensorDto registerSensorDto) {
        Sensor sensor = convertToSensor(registerSensorDto);
        sensor.setCreationDate(new Timestamp(System.currentTimeMillis()));
        sensorRepository.save(sensor);
    }

    public boolean alreadyCreated(RegisterSensorDto registerSensorDto) {
        return findByName(registerSensorDto.getName()).isPresent();
    }

    @Transactional
    public void delete(DeleteSensorDto deleteSensorDto) {
        sensorRepository.delete(convertToSensor(deleteSensorDto));
    }

    private ResponseSensorDto convertToResponseDataDto(Sensor sensor) {
        ResponseSensorDto response = new ResponseSensorDto();
        response.setId(sensor.getId());
        response.setName(sensor.getName());
        response.setDataCount(sensor.getWeatherDataList().size());

        return response;
    }

    private Sensor convertToSensor(SensorDto sensorDto) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(sensorDto, Sensor.class);
    }

}
