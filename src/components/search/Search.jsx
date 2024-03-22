import React from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';
import { GeoAPIOptions,GeoAPIUrl } from '../../api';

const Search = ({onSearchChange}) => {
  const [search,setSearch] = React.useState('null')
 async function  loadOptions(inputValue){
  try {
    const response = await fetch (`${GeoAPIUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`, GeoAPIOptions);
    const result = await response.json();
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
    <div>
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
