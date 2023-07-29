package exemple.rest.api.Server.controllers;

import exemple.rest.api.Server.dtos.sensorDtos.DeleteSensorDto;
import exemple.rest.api.Server.dtos.sensorDtos.RegisterSensorDto;
import exemple.rest.api.Server.utils.BindingResultParser;
import exemple.rest.api.Server.services.SensorService;
import exemple.rest.api.Server.utils.exceptions.AlreadyCreatedException;
import exemple.rest.api.Server.utils.exceptions.CustomValidationException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sensors")
public class SensorController {

    private final SensorService sensorService;

    @GetMapping("/index")
    public ResponseEntity<?> index() {
        return ResponseEntity.ok(sensorService.findAllSensors());
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterSensorDto registerSensorDto,
                                      BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            String errorMsg = BindingResultParser.parse(bindingResult);
           throw new CustomValidationException(HttpStatus.BAD_REQUEST, errorMsg);
        }
        if (sensorService.alreadyCreated(registerSensorDto)){
            throw new AlreadyCreatedException(HttpStatus.CREATED, "Sensor with this name has already been created");
        }

        sensorService.save(registerSensorDto);
        return ResponseEntity.ok("Sensor: " + registerSensorDto.getName() + " is registered");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody DeleteSensorDto deleteSensorDto) {
        if (sensorService.findById(deleteSensorDto.getId()).isEmpty()) {
            throw new CustomValidationException(HttpStatus.NOT_FOUND, "Sensor not found");
        }

        sensorService.delete(deleteSensorDto);
        return ResponseEntity.ok("Sensor is deleted");
    }


}
