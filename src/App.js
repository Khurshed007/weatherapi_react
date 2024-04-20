import React from 'react';
import WeatherContainer from './WeatherContainer';
import WeatherApi from './WeatherApi';
import './App.css';
import { useState } from 'react';
import WeatherDetails from './WeatherDetails';

function App() {
  const [cityId, setCityIdState] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState("");
  let [val, setVal] = useState("")         
  const [cityIdClick, setCityIdStateClick] = useState(null);    

                 // Details for today
  const [weatherDetailsMain, setWeatherDetailsMain] = useState({
    humidity: 0,
    temp: 0,
    pressure: 0,
    temp_min: 0,
    temp_max: 0,
  });
  const [weatherDetailsWind, setWeatherDetailsWind] = useState({
    speed: 0,
    deg : 0
  });
  const [weatherDetailsWeather, SetweatherDetailsWeather] = useState({
    icon: 0,
    description : 0
  });
  
  const [icon, setIcon] = useState("");

  const [today, setToday] = useState([]);
      
          // List for 5 Days
  const [dateDetailsList, setDateDetailsList] = useState({});
  const [weatherDetailsWeatherList, SetweatherDetailsWeatherList] = useState({});
  




  return (
    <div className="App" >
      <WeatherContainer setVal = {setVal}  
      cityIdClick = {cityIdClick}
      cityId = {cityId} loaded = {loaded} icon = {icon} today = {today} weatherDetailsWeatherList = {weatherDetailsWeatherList}
      dateDetailsList = {dateDetailsList} 
      weatherDetailsMain = {weatherDetailsMain} weatherDetailsWind = {weatherDetailsWind} weatherDetailsWeather = {weatherDetailsWeather}  />
      <WeatherApi setCityIdState = {setCityIdState} cityId = {cityId} weatherData = {weatherData} setWeatherData = {setWeatherData}
       loaded = {loaded} setLoaded = {setLoaded} weatherDetailsMain = {weatherDetailsMain} setWeatherDetailsMain = {setWeatherDetailsMain}
       setWeatherDetailsWind = {setWeatherDetailsWind} SetweatherDetailsWeather = {SetweatherDetailsWeather}  setIcon = {setIcon}
       setDateDetailsList = {setDateDetailsList} SetweatherDetailsWeatherList = {SetweatherDetailsWeatherList} setToday = {setToday}
       setCityIdStateClick = {setCityIdStateClick}
      />
    </div>
  );
}

export default App;