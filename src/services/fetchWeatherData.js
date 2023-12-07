const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

const fetchWeatherData = async (city) => {

  console.log(import.meta.env.VITE_API_KEY); //comprobación

  const response = await fetch(`${API_WEATHER}${city}`);
  const data = await response.json();
  if (data.error) {
    throw { message: data.error.message };
  }
  return {
    city: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.code,
    icon: data.current.condition.icon,
    conditionText: data.current.condition.text,
    wind: data.current.wind_kph,
    humidity: data.current.humidity,
    last_updated: data.current.last_updated,
  };
};

export default fetchWeatherData;