package exemple.rest.api.Server.controllers;

import exemple.rest.api.Server.dtos.ResponseSensorsDto;
import exemple.rest.api.Server.dtos.SensorDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.utils.BindingResultParser;
import exemple.rest.api.Server.services.SensorService;
import exemple.rest.api.Server.utils.exceptions.AlreadyCreatedException;
import exemple.rest.api.Server.utils.exceptions.CustomNotFoundException;
import exemple.rest.api.Server.utils.exceptions.CustomValidationException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sensors")
@CrossOrigin(origins = "http://localhost:4200")
public class SensorController {

    private final SensorService sensorService;

    @GetMapping
    public ResponseEntity<?> index(@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
                                   @RequestParam(value = "pageSize", defaultValue = "5", required = false) int pageSize,
                                   @RequestParam(value = "sortBy", defaultValue = "id", required = false) String sortBy,
                                   @RequestParam(value = "direction", defaultValue = "DESC", required = false) String direction) {

        return ResponseEntity.ok(sensorService.findAllData(pageNo, pageSize, Sort.Direction.fromString(direction), sortBy));
    }

    @PostMapping
    public ResponseEntity<?> register(@Valid @RequestBody SensorDto dto,
                                      BindingResult bindingResult) {
        validate(bindingResult);
        checkUniq(dto);

        sensorService.save(dto);
        generateData();
        return ResponseEntity.ok("Sensor: " + dto.getName() + " is registered");
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @Valid @RequestBody SensorDto dto,
                                      BindingResult bindingResult) {
        validate(bindingResult);
        Sensor sensor = checkSensor(dto, id);

        sensor.setLongitude(dto.getLongitude() != null ? dto.getLongitude() : sensor.getLongitude());
        sensor.setLatitude(dto.getLatitude() != null ? dto.getLatitude() : sensor.getLatitude());
        sensor.setAltitude(dto.getAltitude() != null ? dto.getAltitude() : sensor.getAltitude());
        sensor.setName(dto.getName() != null ? dto.getName() : sensor.getName());

        sensorService.update(id, sensor);
        generateData();
        return ResponseEntity.ok("Sensor: " + dto.getName() + " is updated");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        if (sensorService.findById(id).isEmpty()) {
            throw new CustomValidationException(HttpStatus.NOT_FOUND, "Sensor not found");
        }

        sensorService.delete(id);
        generateData();
        return ResponseEntity.ok("Sensor is deleted");
    }

    public void validate(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            String errorMsg = BindingResultParser.parse(bindingResult);
            throw new CustomValidationException(HttpStatus.BAD_REQUEST, errorMsg);
        }
    }

    public void checkUniq(SensorDto registerSensorDto) {
        if (sensorService.alreadyCreated(registerSensorDto)){
            throw new AlreadyCreatedException(HttpStatus.CREATED, "Sensor with this name has already been created");
        }
    }

    public Sensor checkSensor(SensorDto registerSensorDto, int id) {
        Sensor sensor = sensorService.findById(id)
                .orElseThrow(() -> new CustomNotFoundException(HttpStatus.NOT_FOUND, "Sensor not found"));
        if (sensorService.alreadyCreated(registerSensorDto)){
            throw new AlreadyCreatedException(HttpStatus.CREATED, "Sensor with this name has already been created");
        }
        return sensor;
    }

    public void generateData() {
        new RestTemplate().postForObject("http://localhost:8090/generation", null, Void.class);
    }

}
