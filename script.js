const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
const weatherInfoDiv = document.getElementById('weatherInfo');

// Get weather by user's input
function getWeatherByInput() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        getWeather(location);
    }
}

// Get weather function
function getWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                weatherInfoDiv.innerHTML = `<p>Location not found</p>`;
            }
        })
        .catch(error => {
            weatherInfoDiv.innerHTML = `<p>Error fetching data</p>`;
        });
}

// Display weather information
function displayWeather(data) {
    const { name } = data;
    const { temp } = data.main;
    const { description } = data.weather[0];
    const { humidity } = data.main;
    const { speed } = data.wind;

    weatherInfoDiv.innerHTML = `
        <p><strong>City:</strong> ${name}</p>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${speed} m/s</p>
    `;
}
