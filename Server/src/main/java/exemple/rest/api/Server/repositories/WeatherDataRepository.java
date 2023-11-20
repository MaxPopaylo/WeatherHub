package exemple.rest.api.Server.repositories;

import exemple.rest.api.Server.entity.WeatherData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Repository
public interface WeatherDataRepository extends JpaRepository<WeatherData, Integer> {
    List<WeatherData> findAllByRaining(boolean raining);
    Integer countWeatherDataByDate(LocalDate date);
}
