import React from "react";
import "./maintemp.css";

export default function MainTemp() {
  return (
    <div className="MainTemp">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>
              <span id="main-temp">21</span>
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
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/493/original/sunimg.png?1651717721"
              id="weather-icon"
              alt="sun"
            />
            <h2 id="city-name">Baguio, PH</h2>
          </div>{" "}
          <div className="col-6">
            <form id="city-form">
              <input type="search" placeholder="Enter a city" id="city-input" />
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
}
