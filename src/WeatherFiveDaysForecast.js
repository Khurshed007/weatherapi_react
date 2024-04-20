import React from 'react';

function WeatherFiveDaysForecast({ data, weatherDetailsWeatherList, dateDetailsList}) {

  let out = [];
  for (let i = 0; i < weatherDetailsWeatherList.length; i++) {
    const { icon, description } = weatherDetailsWeatherList[i].weather[0];
    let [Years, Monthes, Days] = weatherDetailsWeatherList[i].dt_txt.split(" ")[0].split("-");
    out.push(
      <li key={Days}>
        <span>{Years} {Monthes} {Days}</span>
        <span className="m">{description}<img src={`https://openweathermap.org/img/wn/${icon}.png`} className="icon" /></span>
      </li>
    );
  }
  // console.log(weatherDetailsWeatherList)
    return (
        <div className="right-side-content-lower-item">
      <h1 className="title forecast">5 days Forecast</h1>
      <div className="detail-item">
        <ul className="detail-list days">
          {out}
        </ul>
      </div>
    </div>
        
      );
}

export default WeatherFiveDaysForecast;