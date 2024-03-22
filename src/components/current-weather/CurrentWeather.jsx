import React from 'react'

const CurrentWeather = ({data}) => {
  return (
    <div className=' shadow-4xl bg-[#333] text-white p-5 w-[400px] mx-auto mt-[20px] rounded-xl shadow-transparent'>

    <div className='flex justify-between items-center'>
    <div>
        <h1 className='font-bold text-xl'>{data.city}</h1>
        <p className='text-md'>{data.weather[0].description}</p>
    </div>
    <div className='w-[100px]'><img src={`icons/${data.weather[0].icon}.png`} alt="weather-img"/></div>
    </div>


    <div className='flex justify-between items-center'>
       <div className='text-7xl font-bold'>{Math.round(data.main.temp)}°C</div>

    <div className='w-[100%] pl-[20px]'>
      <div>
        <p>Details</p>
      </div>
      <div className='flex justify-between'>
        <p>Feels like</p>
        <p className='font-bold'>{Math.round(data.main.feels_like)}°C</p>
      </div>
      <div className='flex justify-between'>
        <p>Wind</p>
        <p className='font-bold'>{Math.round(data.wind.speed)} m/s</p>
      </div>
      <div className='flex justify-between'>
        <p>Humidity</p>
        <p className='font-bold'>{Math.round(data.main.humidity)}%</p>
      </div>
      <div className='flex justify-between'>
        <p>Pressure</p>
        <p className='font-bold'>{Math.round(data.main.pressure)} hPa</p>
      </div>

      </div>

  </div>
  </div>

  )
}

export default CurrentWeather
