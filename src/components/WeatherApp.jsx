import React, {useState, useEffect} from 'react'
import { Loader } from './Loader';
import { WeatherForm } from './WeatherForm';
import { WeatherInfo } from './WeatherInfo';

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [loadig, setLoadig] = useState(false);


  useEffect(() => {
    loadInfo()
    
  }, []);
  useEffect(() => {
    document.title = `Weather | ${weather ?.location.name ??""}`
    
  }, [weather]);

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '79eef28d97msh8c9acb425a12bd6p142cd0jsn0fb51edd6043',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  

const loadInfo = async(city = "pedro juan caballero")=>{
  setLoadig(true)
  try {
    const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options);
    const date = await res.json();
    console.log(date);
    setWeather(date)
  } catch (error) {
    console.log(error);
    
  }
  setLoadig(false)
}

const handleChangeCity=(city)=>{
  setWeather(null);
  loadInfo(city);
  document.body.style.backgroundImage =`url(https://source.unsplash.com/1600x900/? ${city});`
}


  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} weather={weather}/>
      {loadig && <Loader/> }
      <WeatherInfo weather={weather}/>

      
    </div>
  )
}
