export const GeoAPIUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const GeoAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_APP_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};




export const currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather"
export const forecastWeatherAPI = "api.openweathermap.org/data/2.5/forecast"

export const weatherAPIKey = import.meta.env.VITE_WEATHER_APP_API_KEY