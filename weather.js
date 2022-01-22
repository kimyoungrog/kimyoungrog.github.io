const URL = `https://api.openweathermap.org/data/2.5/weather?lang=kr&appid=8c822da236cbe23d9ec850f7416f5a51&units=metric`;
const weather = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather_icon");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `${URL}&lat=${lat}&lon=${lng}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weather.innerText = `${data.name}, ${data.main.temp}°`;
        weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      });
  },
  () => {
    alert("Can't find you. No Weather for you.");
  }
);
