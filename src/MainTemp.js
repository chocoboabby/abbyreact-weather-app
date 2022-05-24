import React, { useState } from "react";
import axios from "axios";
import "./maintemp.css";

export default function MainTemp(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.cityName);

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      icon: `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/493/original/sunimg.png?1651717721`,
      icondescription: response.data.weather[0].desciption,
    });
  }

  function search() {
    let apiKey = "76bd1c0ff8311a8d7f2ae10658044361";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="MainTemp">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>
                <span id="main-temp">{Math.round(weather.temp)}</span>
                <span>
                  <a href="/" id="celcius-temp">
                    °C |
                  </a>
                  <a href="/" id="fahrenheit-temp">
                    °F
                  </a>
                </span>
              </h1>
              <img
                src={weather.icon}
                id="weather-icon"
                alt={weather.icondescription}
              />
              <h2 id="city-name">
                {weather.city}, {weather.country}
              </h2>
            </div>{" "}
            <div className="col-6">
              <form id="city-form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter a city"
                  id="city-input"
                  onChange={changeCity}
                />
                <br />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outline-dark search-btn"
                />
                <i className="fa-solid fa-map-pin location-pin"></i>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
