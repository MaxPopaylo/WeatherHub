package exemple.rest.api.Server.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "weather_data")
public class WeatherData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "temperature")
    private Double temperature;

    @Column(name = "raining", nullable = false)
    private Boolean raining;

    @Column(name = "atmospheric_pressure")
    private Double atmosphericPressure;

    @Column(name = "humidity")
    private Double humidity;

    @Column(name = "date")
    private LocalDate date;

    @ManyToOne
    @JoinColumn(
            name = "sensor_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Sensor sensor;

}
