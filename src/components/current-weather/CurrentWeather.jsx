import React from 'react'

const CurrentWeather = ({data,forecastData}) => {



function getDateTime(value){
const recievedDate = new Date(value)
const options = {
  month: 'long',
  day: 'numeric', 
  hour: 'numeric', 
  hour12: true,
};

const userFormattedDateTime = new Intl.DateTimeFormat('en-US', {
  ...options,
}).format(recievedDate);

return(userFormattedDateTime)
}


function getTime(value){
  const recievedDate = new Date(value * 1000)
  const options = {
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit', 
    hour12: true, 
  };

const userFormattedDateTime = new Intl.DateTimeFormat('en-US', {
  ...options,
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone 
}).format(recievedDate);

return(userFormattedDateTime)
}



  return (
    <div>

      <div className='flex flex-col items-center justify-center my-[20px]'>
      <h1 className='font-bold text-4xl'>{data.city}</h1>
      <p className='mb-[20px]'>{`Long/Lat: ${data.coord.lon}/${data.coord.lat} `}</p>
      <div className='text-7xl font-bold'>{Math.round(data.main.temp)}°C</div>
      <p className='text-xl'>{data.weather[0].description}</p>
      <div className='flex gap-4'>
        <p><span className='font-bold'>H:</span> {Math.ceil(data.main.temp_max)}°C</p>
        <p><span className='font-bold'>L:</span> {Math.floor(data.main.temp_min)}°C</p>
      </div>
      </div>

      <div className='flex justify-evenly border-2 rounded-2xl p-4 shadow-xl'>
      {forecastData.map(forecast=>(
        <div className='flex flex-col items-center'>
        <p>{getDateTime(forecast.dt_txt)}</p>
        <div className='w-[100px]'><img src={`icons/${forecast.weather[0].icon}.png`} /></div>
        <p>{Math.round(forecast.main.temp)}°C</p>
        </div>
      ))}
      </div>
      
  </div>

  )
}

export default CurrentWeather
