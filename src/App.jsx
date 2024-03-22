import { useState } from 'react'
import  Search from './components/search/Search'
import CurrentWeather from './components/current-weather/CurrentWeather'
import { currentWeatherAPI,forecastWeatherAPI } from './api'
import { weatherAPIKey } from './api'
import Forecast from './components/forecast/Forecast'

function App() {

  const [currentWeather,setCurrentWeather] = useState(null)
  const [forecast,setForecast] = useState(null)

  async function handleOnSearchChange(searchData){

  try{
   const [lat, lon] = searchData.value.split(" ")
   const currentWeatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`)
   const forecastWeatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`)
   const currentWeather = await currentWeatherFetch.json()
   const forecast = await forecastWeatherFetch.json()

   setCurrentWeather({city:searchData.label, ...currentWeather})
   setForecast({city:searchData.label, ...forecast})
  }
  catch(error){
    console.log(error.message)
  }

   console.log(currentWeather)
   console.log(forecast)
  }


  return (
    <div className='max-w-[1080px] my-[20px] mx-auto'>
     <Search onSearchChange={handleOnSearchChange}/>
     {currentWeather && <CurrentWeather data={currentWeather}/>}
     {forecast && <Forecast data ={forecast}/>}
    </div>
  )
}

export default App
