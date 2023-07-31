# WeatherHUB ![WeatherHUB](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/Weather_icon35.png)

![WeatherHUB](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/BG2_Picture.jpg)

## Project description

The WeatherHUB project is a complex system that includes 3 separate APIs for monitoring weather data. This system provides sending, storage and visualization of weather data. It consists of the following components:

1. **WeatherSensor API**: This API is responsible for sending weather data, and also has the functionality to generate random data in an arbitrary amount

2. **Server API**: The server component that receives data from the sensors, registers it in the system and provides the ability to retrieve this data and transfer it to the UI.

3. **UI API**: A web application that provides a user interface for viewing weather data. It has 4 pages with different functionalities:

    a. **MainInfo page**: Displays general information about the amount of data and the number of rainy and non-rainy days. It also shows a table with all available weather data.
   ![MainInfo page](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/MainInfo_Page.png)

    b. **Charts page**: Displays charts showing weather trends, the number of data points from different sensors, and the number of days with rain.
   ![Charts page](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/Charts_Page.png)

    c. **Admin page**: Provides a table with all registered sensors and functionality to remove them from the system.
   ![Admin page](https://github.com/MaxPopaylo/WeatherHub/blob/ee2d52c691fdb378e0ad02fdf846a10ea92ca745/UI/src/assets/img/Admin_Page.png)

    d. **GenerateData page**: Contains an input field for specifying the amount of data to be generated. When you click on the button, the system sends a request to the sensor to generate random data and store it in the system.
   ![GenerateData page](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/GenerateData_Page.png)

## Technologies

The project was developed using the following technologies:

- Backend:
  - Spring Boot: For project configuration.
  - Spring Web: To create a REST API and process HTTP requests.
  - Spring JPA and Hibernate: To interact with the PostgreSQL database and store weather data.
  - PostgreSQL: The database where the weather data and sensor information is stored.

- Frontend:
  - Angular: The main framework for developing a web application and creating interactions with the REST API.
  - HTML, CSS, and Bootstrap: For creating and designing the user interface.

## Connection instructions

To successfully use the program, please follow these steps:

1. Make sure that PostgreSQL is installed on your computer, as well as the JRE and JDK.

2. Create a new PostgreSQL database with the following tables:

   ![DB Tables](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/Tables_DB.png)

4. Change the configuration files of the application.yml project to configure the connection to your database. And register the ports you need (By default, Sensor - 8090, Server - 8085, UI-4200).

5. Run the WeatherSensor API, Server API, and UI API on the appropriate ports.

6. Register the sensor by making the following Http request (the name of the sensor is specified in the application.yml file):
   ![SensorRegister Request](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/SensorRegister_Request.png)

7. Now you can open the web application in your web browser using the address `http://localhost:your_ui_port`, where `your_ui_port` is the port on which the UI API is running (If you changed the ports, they should be changed in all places in the api itself).

8. Use all the functions of the application to view weather data, statistics, graphs, and save random data from sensors.

## Author

The project was written by [Maksym Popailo] (https://github.com/MaxPopaylo)

## Contact
[Linkedin](https://www.linkedin.com/in/maksym-popaylo-aa97a51a9/)


