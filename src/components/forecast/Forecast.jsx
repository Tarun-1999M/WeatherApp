import React from 'react'
import { Accordion,AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const Forecast = ({data}) => {
    const Days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const dayOfWeek = new Date().getDay();
    const forecastDays = Days.slice(dayOfWeek,Days.length).concat(Days.slice(0,dayOfWeek))
  return (
    <div className='my-4'>
      <div className='text-3xl font-bold'>Daily</div>
      <Accordion allowZeroExpanded>
      { data.list.slice().splice(0,7).map((item,key)=>(
        <AccordionItem key={key}>
            <AccordionItemHeading>
                <AccordionItemButton>
                <div className='flex w-[100%] justify-between items-center bg-[white] rounded-xl my-2 px-2 border-black '>
                   <div className='flex items-center'>
                        <div className='w-[60px]'> <img src={`icons/${item.weather[0].icon}.png`} /></div>
                        <div className='font-bold'>{forecastDays[key]}</div>
                    </div> 

                    <div className='flex items-center'>
                        <div className='mx-4 font-bold'>{item.weather[0].description}</div>
                        <div className='font-bold'>{Math.floor(item.main.temp_min)}°C / {Math.ceil(item.main.temp_max)}°C</div>
                    </div>

                </div>

                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="grid grid-cols-2">
                    <div className='flex items-center justify-between px-4'>
                        <p>Pressure</p>
                        <p>{item.main.pressure} hPa</p>
                    </div>
                    <div className='flex items-center justify-between px-4'>
                        <p>Humidity</p>
                        <p>{item.main.humidity}%</p>
                    </div>
                    <div className='flex items-center justify-between px-4'>
                        <p>Clouds</p>
                        <p>{item.clouds.all}</p>
                    </div>
                    <div className='flex items-center justify-between px-4'>
                        <p>Wind speed</p>
                        <p>{item.wind.speed} m/s</p>
                    </div>
                    <div className='flex items-center justify-between px-4'>
                        <p>Sea level</p>
                        <p>{item.main.sea_level}</p>
                    </div>
                    <div className='flex items-center justify-between px-4'>
                        <p>Feels like</p>
                        <p>{item.main.feels_like}</p>
                    </div>
                </div>
            </AccordionItemPanel>
       </AccordionItem>
      ))
}
      </Accordion>
    </div>
  )
}

export default Forecast
