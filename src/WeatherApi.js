
import React, { useEffect, useRef } from 'react';


let cityInput = document.querySelector(".search-bar");
let searchButton
let Api_Key = "5ec342cc8a76c142d3e82ed9f3a51d6d";
const TEMP = document.querySelector(".temp");
const HUMIDITY = document.querySelector(".humidity");
const WIND = document.querySelector(".wind");
const CITY_DATE = document.querySelector(".city-date")
const DESCRIPTION = document.querySelector(".description")
const CURRENT_CITY = document.querySelector(".city")
const TODAYS_DATAILS = document.querySelector(".today-details")



const WeatherApi = ({ setCityIdState, setWeatherData, setLoaded, setWeatherDetailsWind,SetweatherDetailsWeather, setWeatherDetailsMain,
    setIcon, setDateDetailsList, SetweatherDetailsWeatherList, setToday, handleSearchButtonClick
}) => {
  const cityInputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      setLoaded(true);
    });
  }, [setLoaded]);

 
let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thirsday",
    "Friday",
    "Saturday"
]

let CalMonthes = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

  const fetchWeatherData = (id) => {
    const WHEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${Api_Key}`;
    fetch(WHEATHER_API_URL).then(res => res.json()).then(data => {
         let uniqeDays = [];
         let firstIndex = []
         let fDay = []
     
  
          let newForeCast = data.list.filter((item,index) => {
                let txtDays = data.list[index].dt_txt.split(" ")
                let txtFirstDay = data.list[index].dt_txt.split(" ")[0].split("-")[2]
     
                 if(!fDay.includes(txtFirstDay)){
                    fDay.push(txtFirstDay)
                 }
       
                if(index > 0){
                if(txtDays[1].includes("6:00") && !txtDays[0].includes("-"+fDay[0])){
                    return uniqeDays.push(data.list[index])
                }
              }else{
                   firstIndex.push(data.list[index])
              }
          })
          createWeatherCard(newForeCast,firstIndex)
    
         }).catch(() => alert("So ein/eine Staat/Stadt ist nicht gefunden"))
  };
  let cityName
  const getCityId = (city) => {
    searchButton = document.querySelector(".search button"); 
    cityName = document.querySelector(".j").value.trim();
    if (cityName === "" || cityName === undefined || cityName === null) cityName = city;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${Api_Key}`;
    fetch(weatherApiUrl)
      .then((res) => res.json())
      .then((data) => {
        let id = data.id;
        setCityIdState(id);
        setWeatherData(data);
        document.querySelector(".cityname").innerHTML = `Today's weather details in ${data.name}`;
        fetchWeatherData(id);
        setCityIdState(data.name)
        setLoaded("url('https://source.unsplash.com/1600x900/?" + data.name + " ')")
      });
  };

  function handleSearchButtonClick(){
    getCityId("Germany");
  }
    
  useEffect(() => {
    // Вызывается после рендера компонента
    getCityId("Germany");
  }, []); // Пустой массив зависимостей, чтобы эффект вызывался только после первого рендера

    
  useEffect(() => {
    
    searchButton.addEventListener('click', handleSearchButtonClick);

    return () => {
        searchButton.removeEventListener('click', handleSearchButtonClick);
    };
}, [handleSearchButtonClick, searchButton]);

  

  const createWeatherCard = (items, firstItem) => {
    const { humidity, temp, pressure, temp_min, temp_max } = firstItem[0].main;
    setWeatherDetailsMain({
      humidity,
      temp,
      pressure,
      temp_min,
      temp_max,
    } );

    const {speed,deg} = firstItem[0].wind

    setWeatherDetailsWind({
        speed,
        deg
      } );

    const {icon, description} = firstItem[0].weather[0];
    SetweatherDetailsWeather({
         icon,
         description
    })
    let settedMonth = CalMonthes[new Date().getMonth()]
    let day = firstItem[0].dt_txt.split(" ")[0].split("-")[2]
    let Hour = firstItem[0].dt_txt.split(" ")[1].split(":")[0]
     setToday([day,Hour, settedMonth])
    let ICON = `https://openweathermap.org/img/wn/${icon}.png`
    setIcon(ICON)
    const newDateDetailsList = [];
    const newweatherDetailsWeatherList = []
    for(let i = 0; i < items.length; i++){
        const {icon, description} = items[i].weather[0];
        let [Years,Monthes, Days] = items[i].dt_txt.split(" ")[0].split("-")

      newDateDetailsList.push({
        Years,
        Monthes,
        Days,
      });
     newweatherDetailsWeatherList.push(
        {
            icon,
            description
        }
     )
    }
    setDateDetailsList(newDateDetailsList);
    SetweatherDetailsWeatherList(items)
  };
  


};

export default WeatherApi