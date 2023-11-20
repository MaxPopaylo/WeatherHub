package exemple.rest.api.Server.controllers;

import exemple.rest.api.Server.dtos.data.WeatherDataDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.services.SensorService;
import exemple.rest.api.Server.services.WeatherDataService;
import exemple.rest.api.Server.utils.BindingResultParser;
import exemple.rest.api.Server.utils.exceptions.CustomNotFoundException;
import exemple.rest.api.Server.utils.exceptions.CustomValidationException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
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

    @GetMapping
    public ResponseEntity<?> index(@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
                                   @RequestParam(value = "pageSize", defaultValue = "15", required = false) int pageSize,
                                   @RequestParam(value = "sortBy", defaultValue = "id", required = false) String sortBy,
                                   @RequestParam(value = "direction", defaultValue = "DESC", required = false) String direction) {

        return ResponseEntity.ok(weatherDataService.findAllData(pageNo, pageSize, Sort.Direction.fromString(direction), sortBy));
    }

    @GetMapping("/all")
    public ResponseEntity<?> index() {
        return ResponseEntity.ok(weatherDataService.findAllData());
    }


    @GetMapping("/count_data")
    public ResponseEntity<?> amountRainingDay() {
        return ResponseEntity.ok(weatherDataService.findAllCountData());
    }

    @GetMapping("/sensor")
    public ResponseEntity<?> dataBySensor(@RequestParam(value = "sensorId") int sensorId) {
        return ResponseEntity.ok(weatherDataService.findDataBySensor(checkSensor(sensorId)));
    }

    @PostMapping
    public ResponseEntity<?> add(@Valid @RequestBody WeatherDataDto dto,
                                 BindingResult bindingResult) {
        validate(bindingResult);
        weatherDataService.add(dto, checkSensor(dto.getSensor_id()));
        return ResponseEntity.ok("Data added");
    }

    public Sensor checkSensor(int id) {
        return sensorService.findById(id)
                .orElseThrow(() -> new CustomNotFoundException(HttpStatus.NOT_FOUND, "Sensor not found"));
    }

    public void validate(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            String errorMsg = BindingResultParser.parse(bindingResult);
            throw new CustomValidationException(HttpStatus.BAD_REQUEST, errorMsg);
        }
    }


}
