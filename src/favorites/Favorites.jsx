import React from 'react'
import { useState,useEffect } from 'react'
import { Accordion,AccordionItemHeading,AccordionItemPanel,AccordionItemButton,AccordionItem } from 'react-accessible-accordion'

const Favorites = ({data}) => {

  const [fill,setFill] = useState({})
  const [favorites,setFavorites] = useState([])

  useEffect(()=>{
    const arr = JSON.parse(localStorage.getItem('favorites'))
    if(arr){
    setFill(arr.includes(data.city)? {[data.city]:true} : {})
    }
    console.log(arr)
  },[data.city])


  useEffect(()=>{
   let arr = JSON.parse(localStorage.getItem('favorites')) || []

   if(fill[data.city]==true){
   if (arr && !arr.includes(data.city)) {
    localStorage.setItem('favorites', JSON.stringify([...arr, data.city]));
   }
  }
  else if(fill[data.city]==false){
    arr = arr.filter((item)=>item!=data.city)
    localStorage.setItem('favorites',JSON.stringify(arr))
  }
  setFavorites(JSON.parse(localStorage.getItem('favorites')))

  },[fill,data.city])


  function handleClick(){
    setFill((prevValue)=>{
      const isFavorite = prevValue[data.city]
      return{...prevValue,[data.city]:!isFavorite}
    })
  }


  return (
  <div>
   <div onClick={handleClick} className='mb-[20px]'>
    <img src={fill[data.city]? 'icons/staricon_filled.png': "icons/star_notFilled.webp"} className='w-[50px]'/>
   </div>

   <Accordion allowZeroExpanded>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div className='mr-auto font-xl border-2 rounded-xl w-[100px] p-2 text-center text-black'>Favorites</div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
      {
      favorites && favorites.map((item)=>(
      <div className='border-2 w-[100px] p-2 text-center font-xl mr-auto'>{item}</div>))
    }
      </AccordionItemPanel>
      </AccordionItem>
   </Accordion>
  </div>
  )
}

export default Favorites
