import { useState } from 'react';
import reactLogo from './assets/react.svg';
import '@fortawesome/fontawesome-free/css/all.css';
import WeatherIcon from './components/WeatherIcon';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import fetchWeatherData from "./services/fetchWeatherData";


import './App.css';

function App() {

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
    wind: "",
    humidity: "",
    last_updated: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error: false,
      message: "",
    });
    try {
      if (!city.trim()) {
        throw { message: "Por favor, añade una ciudad" };
      }

      const weatherData = await fetchWeatherData(city);
      setWeather(weatherData);
    } catch (error) {
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
      setCity("");
    }
  };

  return (
    <>
      <WeatherIcon />
      <Navbar
        onSubmit={onSubmit}
        loading={loading}
        error={error}
        city={city}
        setCity={setCity}
      />

      <h1>WEATHER TODAY</h1>
      <div className="jumbotron">
        {weather.city && <WeatherDisplay weather={weather} />}
      </div>

      <Footer />
    </>
  );
}

export default App;
