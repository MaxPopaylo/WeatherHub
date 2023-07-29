package exemple.rest.api.Server.controllers;

import exemple.rest.api.Server.dtos.weatherDataDtos.WeatherDataDto;
import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.services.SensorService;
import exemple.rest.api.Server.services.WeatherDataService;
import exemple.rest.api.Server.utils.exceptions.CustomNotFoundException;
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

    @PostMapping("/add")
    public ResponseEntity<?> add(@Valid @RequestBody WeatherDataDto weatherDataDto,
                                 BindingResult bindingResult) {
        Sensor sensor = sensorService.findByName(weatherDataDto.getSensor_name())
                .orElseThrow(() -> new CustomNotFoundException(HttpStatus.NOT_FOUND, "Sensor not found"));
        weatherDataService.add(weatherDataDto, sensor);

        return ResponseEntity.ok("Date added");
    }

    @GetMapping("/index")
    public ResponseEntity<?> index() {
        return ResponseEntity.ok(weatherDataService.findAllData());
    }

    @GetMapping("/count_data")
    public ResponseEntity<?> amountRainingDay() {
        return ResponseEntity.ok(weatherDataService.findAllCountData());
    }


}
