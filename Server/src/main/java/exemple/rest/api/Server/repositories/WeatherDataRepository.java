package exemple.rest.api.Server.repositories;

import exemple.rest.api.Server.entity.Sensor;
import exemple.rest.api.Server.entity.WeatherData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WeatherDataRepository extends JpaRepository<WeatherData, Integer> {
    List<WeatherData> findAllByRaining(boolean raining);
    List<WeatherData> findAllBySensorOrderByDateDesc(Sensor sensor);
}
