import React from 'react';


const WeatherDetails = ({weatherDetailsMain, weatherDetailsWind ,weatherDetailsWeather,loaded,cityId, icon, today}) => {
    const { humidity, temp, pressure, temp_min, temp_max } = weatherDetailsMain;
    const {speed,deg} = weatherDetailsWind;
    let [day,Hour, settedMonth] = today;
    const {description} = weatherDetailsWeather;

    document.body.style = `background: ${loaded}`;
  return (
    <div className="left-side-content">
      <div className="card">
        <div className="weather">
          <div className="temp-item">
            <h1 className="temp">{temp}°</h1>
            <h3 className="humidity">Humidity: {humidity}%</h3>
            <h3 className="wind">Wind Speed: {speed} km/h</h3>
          </div>
          <div className="city-item">
            <h2 className="city">Weather in {cityId}</h2>
            <h3 className="city-date">To {Hour} o'clock {settedMonth} {day}th</h3>
          </div>
          <div className="flex">
            <img
              src={icon}
              className="icon"
              alt="Weather Icon"
            />
            <h3 className="description">{description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;