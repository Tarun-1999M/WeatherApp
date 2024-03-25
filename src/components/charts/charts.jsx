import React from 'react'
import {Chart,defaults} from "chart.js/auto"
import {Bar, Line, } from "react-chartjs-2"

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const charts = ({recievedData,value}) => {
    let hours=[]
    let days=[]
    let requiredData =[]
    const path=value.split('.')

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
    
    recievedData.map((data,idx)=>{
         hours = hours.concat(getDateTime(data.dt_txt))
         requiredData = requiredData.concat(path.reduce((acc,currentPath)=>acc[currentPath],data))
    })

    const options = {
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Time',
              font: {
                weight: 'bold',
              },
              color: 'black',
            },
            ticks: {
              color: 'black',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: `${path[1]}`,
              font: {
                weight: 'bold',
              },
              color: 'black',
            },
            ticks: {
              color: 'black',
              font: {
                weight: 'bold',
              },
            },
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'black', 
              font: {
                weight: 'bold', 
              }
            }
          },
          
        }
      };
      
    
  return (
    <div className='h-[400px] font-bold'>
      <Line 
      
      data={
        {
        labels:hours,
        
        datasets:[
            {
                label: `${path[1]}`,
                data:requiredData,
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                
            }
        ]
      }}

      options={options}
      />
    </div>
  )
}

export default charts
