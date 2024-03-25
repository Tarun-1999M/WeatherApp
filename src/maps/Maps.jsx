import React from 'react'
import { useRef , useEffect,useState} from 'react';
const Maps = ({data}) => {


const mapRef = useRef(null)

useEffect(()=>{

    async function fetchAirQuality(){
        const url = `https://airquality.googleapis.com/v1/currentConditions:lookup?key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`
        const requestBody={
            location:{
                longitude:data.coord.lon,
                latitude:data.coord.lat,
            }
        }
        
        try{
        const res = await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(requestBody)
            
        })
    
        const airQualityData = await res.json()
        return(airQualityData)
    }
    catch(error){
        console.log(error)
    }
    
      }



 async function initMap(){
    try{
    const position = {
        lat: data.coord.lat, lng: data.coord.lon,
    }
    const {Map} =  await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    
    const map = new Map( mapRef.current, {
        center:position,
        zoom:8,
        mapId:'7e5c0efd02b0c1fe',
    })

   
    const marker = new AdvancedMarkerElement({
        map:map,
        position:position,
        title:data.city.name,
       
    })

   const airQuality =  await fetchAirQuality()

   const infoWindow = new google.maps.InfoWindow({
    content: `<div><h3>${data.city}</h3><p>AQI: ${airQuality.indexes[0].aqi}</p></div>`,
  });
 {airQuality &&  infoWindow.open(map, marker);}

}
    catch(error){
        console.log(error.message)
    }
 }
initMap();




 
 


}
 ,[data.coord.lat,data.coord.lon]
 
 )

  return (
    <div ref={mapRef} className='w-[100%] h-[500px]'>
    
    </div>
  )
}

export default Maps
