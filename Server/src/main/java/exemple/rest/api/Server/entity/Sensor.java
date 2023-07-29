package exemple.rest.api.Server.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "sensors")
public
class Sensor {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    @NotBlank(message = "Name cannot be empty")
    @Size(min = 2, max = 40, message = "Name size should be between 2 and 40")
    private String name;

    @Column(name = "creation_date")
    @NotNull(message = "Value cannot be empty")
    private Timestamp creationDate;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "sensor")
    private List<WeatherData> weatherDataList;
}
