import React from "react";
import "./App.css";
import MainTemp from "./MainTemp";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <MainTemp />
        <div>
          <a
            href="https://github.com/chocoboabby/abbyreact-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Abby Dela Fuente
        </div>
      </div>
    </div>
  );
}
