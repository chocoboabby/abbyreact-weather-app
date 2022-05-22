import React from "react";
import "./App.css";
import MainTemp from "./MainTemp";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <MainTemp cityName="Davao" />
            <Weather />
          </div>
        </div>
        <div>
          <a
            href="https://github.com/chocoboabby/abbyreact-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            <small>Open source code</small>
          </a>{" "}
          <small>by Abby Dela Fuente</small>
        </div>
      </div>
    </div>
  );
}
