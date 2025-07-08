const apiKey = '9cd84024fd17d32a9e18ba2255662e68'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      resultDiv.innerHTML = `
        <h2>${name}</h2>
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>🌡️ Temperature: ${main.temp} °C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `❌ ${error.message}`;
    });

}
