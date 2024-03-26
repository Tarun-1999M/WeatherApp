import React from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';
import DataFetch from "../../DataFetch"

const Search = ({onSearchChange}) => {
  const [search,setSearch] = React.useState('')
 async function  loadOptions(inputValue){
  try {
    const result = await DataFetch(inputValue) 
    return {
     options: result.data.map((city)=>(
      {
        value:`${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`
      }
     ))
    }
  } catch (error) {
    console.error(error);
  }
  }
  

  function handleChange(searchData){
    setSearch(searchData)
    onSearchChange(searchData)
  }
  return (
    <div className=' w-[300px] p-4'>
      <AsyncPaginate 
      placeholder="Enter City"
      debounceTimeout={600}
      onChange={handleChange}
      value = {search}
      loadOptions={loadOptions}
      />
    </div>
  )
}

export default Search
