import React, { useState } from "react";
import axios from "axios";
import DateFormat from "./DateFormat";
import "./weather.css";

export default function Weather(props) {
  let [description, setDescription] = useState({ ready: false });

  function handleResponse(response) {
    setDescription({
      ready: true,
      date: new Date(response.data.dt * 1000),
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      weathertype: response.data.weather[0].description,
    });
  }

  if (description.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {" "}
              <ul className="date-time">
                <li id="time-date">
                  <DateFormat date={description.date} />
                </li>
                <li className="text-capitalize">{description.weathertype}</li>
              </ul>
            </div>{" "}
            <div className="col-6">
              <ul className="weather-description">
                <li id="feelslike">
                  Feels like: {Math.round(description.feelslike)}°C
                </li>
                <li id="humidity">Humidity: {description.humidity}%</li>
                <li id="windspeed">
                  Wind Speed: {Math.round(description.windspeed)} km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "76bd1c0ff8311a8d7f2ae10658044361";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
