function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = '6f1b69380186d565d957a1bd938d93af';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const temperature = data.main.temp - 273.15;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `<p>Temperature: ${temperature.toFixed(2)} &#8451;</p><p>Description: ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}