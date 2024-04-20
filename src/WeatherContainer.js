import React, { useState } from 'react';
import WeatherDetails from './WeatherDetails';
import WeatherCard from './WeatherCard';
import WeatherFiveDaysForecast from './WeatherFiveDaysForecast';


const WeatherContainer = ({weatherDetailsMain, weatherDetailsWind ,weatherDetailsWeather,loaded, cityId, icon,today,
  weatherDetailsWeatherList, dateDetailsList, handleSearchButtonClick,setVal, cityIdClick
}) => {
  


  return (
    <section className="container">
          {<WeatherDetails weatherDetailsMain = {weatherDetailsMain} loaded = {loaded} cityId = {cityId} today = {today}
           
          weatherDetailsWind = {weatherDetailsWind} weatherDetailsWeather = {weatherDetailsWeather} icon = {icon}/>}

      <div className="right-side-content">
        {<WeatherCard cityIdClick={cityIdClick} setVal = {setVal} weatherDetailsMain = {weatherDetailsMain} weatherDetailsWind = {weatherDetailsWind}/>}
        {< WeatherFiveDaysForecast weatherDetailsWeatherList = {weatherDetailsWeatherList} dateDetailsList = {dateDetailsList} setVal = {setVal}/>}
      </div>
    </section>
  );
};

export default WeatherContainer;