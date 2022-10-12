import React, { useState } from "react";

export const WeatherForm = ({ onChangeCity, weather }) => {
  const [city, setCity] = useState("");
  let value;
  const onChange = (e) => {
    value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };
  const onClick = (e) => {
    if (value === "") {
      alert("Add  name the city or country  ");
    } else {
      onChangeCity(city);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='w-full space-y-4 grid grid-cols-1'>
        <input
          className='w-40 ease-in-out duration-1000 hover:w-full p-1 rounded-md border-2 border-sky-500 outline-none bg-black bg-opacity-40 placeholder:text-white placeholder:font-serif '
          type='text'
          name='text'
          placeholder='Name city or Country'
          onChange={onChange}
        />
        <input
          className='w-40 ease-in-out duration-1000 hover:w-full p-1 rounded-md border-2 border-sky-500 outline-none hover:bg-blue-500 cursor-pointer font-serif'
          type='button'
          value='Search'
          onClick={onClick}
        />
      </form>
    </>
  );
};
