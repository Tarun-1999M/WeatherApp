import { GeoAPIOptions,GeoAPIUrl } from './api'

async function DataFetch(inputValue){
    try{
    const response = await fetch (`${GeoAPIUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`, GeoAPIOptions);
    const result = await response.json();
    return (result)
    }
    catch(error){
        console.log(error)
    }
}


export default DataFetch