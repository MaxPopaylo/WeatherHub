package exemple.rest.api.Server.controllers;

import exemple.rest.api.Server.dtos.SensorDto;
import exemple.rest.api.Server.dtos.WeatherDataDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.services.SensorService;
import exemple.rest.api.Server.services.WeatherDataService;
import exemple.rest.api.Server.utils.BindingResultParser;
import exemple.rest.api.Server.utils.exceptions.CustomNotFoundException;
import exemple.rest.api.Server.utils.exceptions.CustomValidationException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/measurements")
@CrossOrigin(origins = "http://localhost:4200")
public class WeatherDataController {

    public final WeatherDataService weatherDataService;
    private final SensorService sensorService;

    @PostMapping
    public ResponseEntity<?> add(@Valid @RequestBody WeatherDataDto dto,
                                 BindingResult bindingResult) {
        validate(bindingResult);
        weatherDataService.add(dto, checkSensor(dto));
        return ResponseEntity.ok("Data added");
    }

    @GetMapping
    public ResponseEntity<?> index() {
        return ResponseEntity.ok(weatherDataService.findAllData());
    }

    @GetMapping("/count_data")
    public ResponseEntity<?> amountRainingDay() {
        return ResponseEntity.ok(weatherDataService.findAllCountData());
    }

    public Sensor checkSensor(WeatherDataDto dto) {
        return sensorService.findById(dto.getSensor_id())
                .orElseThrow(() -> new CustomNotFoundException(HttpStatus.NOT_FOUND, "Sensor not found"));
    }

    public void validate(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            String errorMsg = BindingResultParser.parse(bindingResult);
            throw new CustomValidationException(HttpStatus.BAD_REQUEST, errorMsg);
        }
    }


}
