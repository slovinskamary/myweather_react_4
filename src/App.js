import "./App.css";
import React, { useState } from "react";
export default function App() {
  const [city, setCity] = useState("");
  const [firstcity, setFirstcity] = useState("New York");
  const [message, setMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setFirstcity(null);
    setMessage(`  It is currently ${weatherData.temperature} °C in ${city}`);
  }
  let weatherData = {
    city: "NewYork",
    date: "Wednesday 23:39",
    description: "clear sky",
    humidity: "31",
    wind: "5",
    imgUrl: "https://www.gstatic.cn/onebox/weather/64/sunny.png",
    temperature: "26",
  };
  function chahgeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit} сlassName="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
              onChange={chahgeCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <div className="overview">
            <h1>
              {firstcity}
              {message}
            </h1>

            <ul>
              <li>
                {weatherData.date} , {weatherData.description}
              </li>
              <li>
                Humidity: {weatherData.humidity} % , Wind: {weatherData.wind}{" "}
                m/h
              </li>
            </ul>
          </div>
        </div>

        <div className="col-6">
          <div className="clearfix weather-temperature d-flex justify-content-end">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              width="100"
              height="100"
            />
            <div className="float-right">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
