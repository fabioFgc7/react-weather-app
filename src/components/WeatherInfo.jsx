import React from "react";

export const WeatherInfo = ({ weather }) => {

  return (
    <section className='mt-10 bg-sky-600 w-full p-5 rounded-md bg-opacity-30'>
      <div className='flex justify-between ml-2 mr-2 space-x-10 font-serif'>
        <h2>
          City: <b>{weather?.location.name}</b>
        </h2>
        <h1>
          Country: <b>{weather?.location.country}</b>
        </h1>
      </div>
      <div className='text-center mb-5 mt-8'>
        <picture className='flex justify-center'>
          <img
            className='w-20'
            src={weather?.current.condition.icon}
            alt='WAEATHER'
          />
        </picture>
        <p className='text-lg font-semibold font-serif'>
          {weather?.current.condition.text}
        </p>
      </div>

      <div className='flex space-x-6 justify-center pb-10 font-serif'>
        <h3>{weather?.current.temp_c}°C</h3>
        <h3>{weather?.current.humidity}%</h3>
        <h3>{weather?.current.wind_kph}km/h</h3>
      </div>
    </section>
  );
};
