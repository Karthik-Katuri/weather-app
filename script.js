const apiKey = "b182a7444488cf5fb87a598ccf2777c1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherImage = document.querySelector(".card");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = " block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
      weatherImage.style.backgroundImage = "url('images/cloudy_sky.jpg')";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sunnyw.png";
      weatherImage.style.backgroundImage = "url('images/sky.jpg')";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rainyw.png";
      weatherImage.style.backgroundImage = "url('images/rainy_sky.jpg')";
    } else if (data.weather[0].main == " Drizzle") {
      weatherIcon.src = "images/drizzle.jpg";
      weatherImage.style.backgroundImage =
        "url('images/drizzle_sky.jpg')";
    } else if (data.weather[0].main == " Mist") {
      weatherIcon.src = "images/Mist.png";
      weatherImage.style.backgroundImage = "url('images/mist_sky.jpg')";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = " none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
