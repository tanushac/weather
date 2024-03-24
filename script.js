const apiKey = "1cec19f0179800d755920521f8606301";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let cityInput = document.querySelector("#city");
let btn = document.querySelector(".btn");
let temp = document.querySelector(".temp");
let nam = document.querySelector(".nam");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let weatherIcon = document.querySelector(".weather-icon");
async function checkWeather() {
  const city = cityInput.value;
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}
else{
    const data = await response.json();
      nam.innerText = city.toUpperCase();
      temp.innerText = Math.round(data.main.temp) + "°C";
      wind.innerText = data.wind.speed + "km/h";
      humidity.innerText = data.main.humidity + "%";
      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main === "Rain") {
          weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", (evt) => {
  checkWeather();
});
