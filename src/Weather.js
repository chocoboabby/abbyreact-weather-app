import React from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="row">
          <div className="col-6">
            {" "}
            <ul className="date-time">
              <li id="time-date">May 4, 2022 | Wednesday | 15:00</li>
              <li>Sunny</li>
            </ul>
          </div>{" "}
          <div className="col-6">
            <ul className="weather-description">
              <li id="feelslike">Feels like: 30 °C</li>
              <li id="humidity">Humidity: 77%</li>
              <li id="windspeed">Wind Speed: 4 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
