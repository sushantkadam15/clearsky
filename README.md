# weather-app

<h1>Weather App Demo</h1>

<h2>Description</h2>

<p>
  The Weather App is a web application that allows users to search for the weather information of different cities around the world. It provides real-time weather data, including temperature, weather description, wind speed, and more. It is powered by OpenWeatherMap API.
</p>

<h2>Features</h2>

<ul>
  <li><strong>City Search: </strong>Users can enter the name of a city in the search box to retrieve the weather information for that particular city.</li>
  <li><strong>Autocomplete: </strong> As users type in the search box, the app suggests matching city names, helping users find the desired city more easily.</li>
  <li><strong>Weather Display: </strong> The app presents the weather data in a user-friendly format, providing information such as city name, temperature, weather description, wind speed, and other relevant details. </li>
  <li><strong>Error Handling: </strong>In case of any errors, such as invalid city names or API failures, appropriate error messages are displayed to inform the users about the issue.</li>

</ul>

<h2>Technologies Used</h2>

<ul>
  <li><strong>HTML</strong>: The app&apos;s structure and layout are defined using HTML.</li>
  <li><strong>CSS</strong>: CSS is used for styling the app, providing an appealing and intuitive user interface.</li>
  <li><strong>Bootstrap 5</strong>: Bootstrap 5, a popular CSS framework, is utilized for responsive design, layout components, and utility classes.</li>
  <li><strong>JavaScript</strong>: The app utilizes JavaScript to handle the autocomplete feature, interact with APIs, and dynamically update the UI.</li>
  <li><strong>Embedded JavaScript (EJS)</strong>: EJS is a templating language that allows for embedding JavaScript code within HTML templates, enabling dynamic content generation.</li>
  <li><strong>Axios</strong>: The Axios library is used for making HTTP requests to retrieve weather data from the OpenWeatherMap API.</li>
  <li><strong>JSON</strong>: The app utilizes a JSON file (<code>world-cities.json</code>) to store city data for autocomplete functionality.</li>
</ul>

<h2>Dependencies</h2>

<ul>
  <li>express</li>
  <li>axios</li>
  <li>nodemon (dev dependency)</li>
  <li>concurrently (dev dependency)</li>
  <li>open (dev dependency)</li>
  <li>dotenv (dev dependency)</li>
  <li>ejs (Embedded JavaScript)</li>
  <li>bootstrap</li>
</ul>

<h2>Installation</h2>

<ol>
  <li>Clone the repository: <code>git clone &lt;repository-url&gt;</code></li>
  <li>Install the dependencies: <code>npm install</code></li>
  <li>Start the server: <code>node app.js</code></li>
  <li>Open the project in a web browser: <code>http://localhost:3300</code></li>
</ol>

<h2>Usage</h2>

<ol>
  <li>Open the project in a web browser.</li>
  <li>Type a city name in the search box.</li>
  <li>Autocomplete suggestions will appear as you type.</li>
  <li>Click on a suggestion to select a city.</li>
  <li>The selected city will be displayed in the search box.</li>
</ol>

<h2>API Usage</h2>

<p>This project utilizes the OpenWeatherMap API to fetch weather data for the selected city. An API key is required for accessing the weather data.</p>

