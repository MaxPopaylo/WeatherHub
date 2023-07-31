# WeatherHUB ![WeatherHUB](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/Weather_icon35.png)

![WeatherHUB](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/BG2_Picture.jpg)

## Опис проекту

Проект "Weather Monitoring System" є комплексною системою, що включає 3 окремі API для моніторингу погодних даних. Ця система забезпечує надсилання, зберігання та візуалізацію погодних даних. Вона складається з наступних компонентів:

1. **WeatherSensor API**: Цей API відповідає за надсилання погодних даних, а також має функціонал генерації випадкових даних в довільній кількості

2. **Server API**: Серверний компонент, який приймає дані від сенсорів, реєструє їх у системі і забезпечує можливість отримання цих даних і передачі на UI.

3. **UI API**: Веб-додаток, який надає інтерфейс користувача для перегляду погодних даних. Він має 4 сторінки з різними функціональностями:

    a. **MainInfo page**: Відображає загальну інформацію про кількість даних та кількість дщових і не дощових днів. Показує також таблицю зі всіма доступними погодними даними.
   ![MainInfo page](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/MainInfo_Page.png)

    b. **Charts page**: Показує графіки, що відображають погодні тенденції, кілкість даних отриманих від різних сенсорів та кількість днів із дощем.
   ![Charts page](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/Charts_Page.png)

    c. **Admin page**: Представляє таблицю з усіма зареєстрованими сенсорами та функціоналом для їх видалення з системи.
   ![Admin page](https://github.com/MaxPopaylo/WeatherHub/blob/ee2d52c691fdb378e0ad02fdf846a10ea92ca745/UI/src/assets/img/Admin_Page.png)

    d. **GenerateData page**: Містить поле введення для вказання кількості даних, які потрібно згенерувати. При натисканні на кнопку, система відправляє запит до сенсора, щоб згенерувати випадкові дані та зберегти їх у системі.
   ![GenerateData page](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/GenerateData_Page.png)

## Технології

Проект був розроблений з використанням таких технологій:

- Backend:
  - Spring Boot: Для конфігурації проекту.
  - Spring Web: Для створення REST API та обробки HTTP-запитів.
  - Spring JPA та Hibernate: Для взаємодії з базою даних PostgreSQL та зберігання погодних даних.
  - PostgreSQL: База даних, де зберігаються погодні дані та інформація про сенсори.

- Frontend:
  - Angular: Основний фреймворк для розробки веб-додатку та створення взаємодію з REST API.
  - HTML, CSS та Bootstrap: Для створення і оформлення користувацького інтерфейсу.

## Інструкції щодо підключення

Для успішного використання програми, будь ласка, дотримуйтесь наступних кроків:

1. Переконайтеся, що на вашому комп'ютері встановлений PostgreSQL, а також JRE та JDK.

2. Створіть нову базу даних PostgreSQL з наступними таблицями:

   ![DB Tables](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/Tables_DB.png)

4. Змініть конфігураційні файли проекту application.yml таким чином, щоб налаштувати з'єднання з вашою базою даних. Та пропишіть потрібні вам порти (За замовчуванням Сенсор - 8090, Сервер - 8085, UI-4200).

5. Запустіть WeatherSensor API, Server API та UI API на відповідних портах.

6. Зареєструйте сенсор зробивши настпуний Http запит (Ім'я сенсора прописуються у application.yml файлі):
   ![SensorRegister Request](https://github.com/MaxPopaylo/WeatherHub/blob/905b2ac3dd8078b5a30226113350ec98269067a5/UI/src/assets/img/SensorRegister_Request.png)

7. Тепер ви можете відкрити веб-додаток у своєму веб-браузері за допомогою адреси `http://localhost:your_ui_port`, де `your_ui_port` - це порт, на якому працює UI API (Якщо ви змінювали порти, їх портрібно змінити в усіх місцях в самих апі).

8. Використовуйте всі функції додатку для перегляду погодних даних, статистик, графіків та збереження випадкових даних від сенсорів.

## Автор

Проект написав [Maksym Popailo](https://github.com/MaxPopaylo)

## Контакти
[Linkedin](https://www.linkedin.com/in/maksym-popaylo-aa97a51a9/)


