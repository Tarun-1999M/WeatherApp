import React from 'react'

const Stats = ({ data }) => {

    function getTime(value, timezone){
      
    let x = moment.utc(value,'X').add(timezone,'seconds').format('hh:mm a');
    return(x)
      }

    return (
        <div>
            <p className='font-bold text-3xl'>Details</p>
            <div className='grid grid-cols-2 grid-rows-2 gap-6'>
                <div className='flex flex-col items-center  border-2 rounded-xl p-9 shadow-xl'>
                    <p>Feels like</p>
                    <p className='font-bold'>{Math.round(data.main.feels_like)}°C</p>
                </div>
                <div className='flex flex-col items-center  border-2 rounded-xl p-9 shadow-xl'>
                    <p>Wind</p>
                    <p className='font-bold'>{Math.round(data.wind.speed)} m/s</p>
                </div>
                <div className='flex flex-col items-center  border-2 rounded-xl p-9 shadow-xl'>
                    <p>Humidity</p>
                    <p className='font-bold'>{Math.round(data.main.humidity)}%</p>
                </div>
                <div className='flex flex-col items-center  border-2 rounded-xl p-9 shadow-xl'>
                    <p>Pressure</p>
                    <p className='font-bold'>{Math.round(data.main.pressure)} hPa</p>
                </div>
                <div className='flex flex-col items-center  border-2 rounded-xl p-9 shadow-xl'>
                    <p>Sunrise</p>
                    <p className='font-bold'>{getTime(data.sys.sunrise,data.timezone)}</p>
                </div>
                <div className='flex flex-col items-center  border-2 rounded-xl p-9 shadow-xl'>
                    <p>Sunset</p>
                    <p className='font-bold'>{getTime(data.sys.sunset,data.timezone)}</p>
                </div>
            </div>
        </div>
    )
}

export default Stats
