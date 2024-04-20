import React from 'react';
import { useState, useRef } from 'react';

function WeatherCard({weatherDetailsMain,weatherDetailsWind, setVal,cityIdClick }) {
  const { humidity, temp, pressure, temp_min, temp_max } = weatherDetailsMain;
  const {deg} = weatherDetailsWind
  const cityInputRef = useRef(null);
  let cityName
  //  console.log(cityIdClick)
   function cityIdClick(){
    // console.log(cityIdClick)
   }
  
  return (
    <div className="right-side-content-upper-item">
      <div className="search">
        <div className="searchbar-box">
          <input type="text" className="search-bar j" ref={cityInputRef} placeholder="Search Location..." />
        </div>
        <button className="btn s-btn" onClick={() => cityIdClick(cityName)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
            />
          </svg>
        </button>
      </div>
      <h3 className="title cityname">Today's weather details in </h3>
      <div className="detail-item">
        <ul className="detail-list today-details">
          <li><p>Lowest Temp: {temp_min}°C</p></li>
          <li><p>Wind deg: {deg}°</p></li>
          <li><p>Humidity: {humidity}</p></li>
          <li><p>Highest Temp: {temp_max}°C</p></li>
          <li><p>Pressure: {pressure}</p></li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherCard;