package exemple.rest.api.Server.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "weather_data")
public class WeatherData {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "value")
    @NotNull(message = "Value cannot be empty")
    @Min(value = -100, message = "Value cannot be less than -100")
    @Max(value = 100, message = "Value cannot be more than -100")
    private double value;

    @Column(name = "raining")
    @NotNull(message = "Value cannot be empty")
    private boolean raining;

    @Column(name = "date")
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "sensor_id",
            referencedColumnName = "id"
    )
    @NotNull(message = "Sensor name cannot be empty")
    private Sensor sensor;

}
