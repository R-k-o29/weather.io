const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "937f35d215msh4cd44b4fc81aa69p1dc463jsnf1a299cefb85",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    cityName.innerHTML = city

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  ).then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp2.innerHTML = response.temp;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.log(err));
};

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi");

//NewYork responses
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york",
    options
  ).then((response) => response.json())
    .then((response) => {
      console.log(response);
      humidity_ny.innerHTML = response.humidity;
      temp_ny.innerHTML = response.temp;
      wind_speed_ny.innerHTML = response.wind_speed;
    })
    .catch((err) => console.log(err));

    //Sydney responses
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney",
    options
  ).then((response) => response.json())
    .then((response) => {
      console.log(response);
      humidity_sd.innerHTML = response.humidity;
      temp_sd.innerHTML = response.temp;
      wind_speed_sd.innerHTML = response.wind_speed;
    })
    .catch((err) => console.log(err));

    //London responses
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
    options
  ).then((response) => response.json())
    .then((response) => {
      console.log(response);
      humidity_ln.innerHTML = response.humidity;
      temp_ln.innerHTML = response.temp;
      wind_speed_ln.innerHTML = response.wind_speed;
    })
    .catch((err) => console.log(err));

    //Dubai responses
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai",
    options
  ).then((response) => response.json())
    .then((response) => {
      console.log(response);
      humidity_db.innerHTML = response.humidity;
      temp_db.innerHTML = response.temp;
      wind_speed_db.innerHTML = response.wind_speed;
    })
    .catch((err) => console.log(err));



