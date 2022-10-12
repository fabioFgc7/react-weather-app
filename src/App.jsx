import { useState } from 'react'
import './App.css'
import { WeatherApp } from './components/WeatherApp'

function App() {

  return (
    <div className="grid place-content-center p-10">
    <h1 className='text-center p-5 font-bold text-xl '>WEATHER APP</h1>
      <WeatherApp/>
    </div>
  )
}

export default App
