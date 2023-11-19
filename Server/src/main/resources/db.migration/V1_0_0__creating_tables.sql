CREATE TABLE sensors
(
    id            SERIAL PRIMARY KEY,
    name          VARCHAR(40) NOT NULL,
    altitude      INT,
    latitude      DOUBLE PRECISION,
    longitude     DOUBLE PRECISION,
    creation_date TIMESTAMP   NOT NULL,
    delete_date TIMESTAMP
);

CREATE TABLE weather_data
(
    id                   SERIAL PRIMARY KEY,
    temperature          DECIMAL(4, 1),
    raining              BOOLEAN                        NOT NULL,
    atmospheric_pressure DECIMAL(6, 2),
    humidity             DECIMAL(4, 1),
    date                 TIMESTAMP,
    sensor_id            BIGINT REFERENCES sensors (id) NOT NULL
);

INSERT INTO sensors (name, altitude, latitude, longitude, creation_date)
VALUES ('Sensor1', 100, 40.7128, -74.0060, '2023-01-01 12:00:00'),
       ('Sensor2', 200, 34.0522, -118.2437, '2023-02-01 14:30:00'),
       ('Sensor3', 150, 38.9072, -77.0370, '2023-03-01 10:45:00'),
       ('Sensor4', 180, 51.5099, -0.1337, '2023-04-01 08:15:00'),
       ('Sensor5', 120, 35.6895, 139.6917, '2023-05-01 16:30:00');

INSERT INTO weather_data (temperature, raining, atmospheric_pressure, humidity, date, sensor_id)
VALUES (25.5, true, 1013.25, 60.0, '2023-01-01 12:15:00', 1),
       (20.0, false, 1015.50, 55.0, '2023-01-01 12:30:00', 2),
       (22.5, true, 1012.75, 58.0, '2023-03-01 11:00:00', 3),
       (18.0, false, 1014.00, 50.0, '2023-04-01 08:30:00', 4),
       (28.0, true, 1010.50, 70.0, '2023-05-01 16:45:00', 5);


