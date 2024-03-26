import { useState } from 'react'
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/CurrentWeather'
import { currentWeatherAPI, forecastWeatherAPI } from './api'
import { weatherAPIKey } from './api'
import Forecast from './components/forecast/Forecast'
import Charts from "./components/charts/charts"
import Stats from './components/stats/Stats'
import Maps from './maps/Maps'
import Favorites from './favorites/Favorites'

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [graph, setGraph] = useState('wind.speed')
  async function handleOnSearchChange(searchData) {

    try {
      const [lat, lon] = searchData.value.split(" ")
      const currentWeatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`)
      const forecastWeatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`)
      const currentWeather = await currentWeatherFetch.json()
      const forecast = await forecastWeatherFetch.json()

      setCurrentWeather({ city: searchData.label, ...currentWeather })
      setForecast({ city: searchData.label, ...forecast })
    }
    catch (error) {
      console.log(error.message)
    }

  }

  function handleChange(e) {
    setGraph(e.target.value)

  }
  return (
    <div className='p-4 bg-clouds min-h-screen w-full bg-cover bg-center'>
      
      <div className='flex justify-between'>
     <div>{currentWeather && <Favorites data={currentWeather}/>}</div> 
     <div> <Search onSearchChange={handleOnSearchChange} /></div>
      </div>

     
    
      {currentWeather && forecast && <CurrentWeather data={currentWeather} forecastData={forecast.list.slice().splice(0, 7)} />}
      <div className='grid grid-cols-3 gap-2 my-[20px]'>
        <div>
          {forecast && <Forecast data={forecast} onSearchChange={handleOnSearchChange}/>}
        </div>
        <div >
          {currentWeather && <Stats data={currentWeather} />}
        </div>
        <div>
          {currentWeather && <Maps data={currentWeather} />}
        </div>

      </div>

      <div className='ml-auto w-[100px] mr-[20px] font-4xl'>
        {currentWeather &&
          <select value={graph} onChange={handleChange}>
            <option value="wind.speed" >Wind</option>
            <option value="main.temp">Temperature</option>
            <option value="main.pressure">Pressure</option>
            <option value="main.humidity">Humidity</option>
            <option value="main.feels_like">Feels_Like</option>
          </select>
        }
      </div>
      
      {forecast && <Charts recievedData={forecast.list.slice().splice(0, 7)} value={graph} />}
     

    </div>
  )
}

export default App
