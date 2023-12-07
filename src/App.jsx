import { useState } from 'react';
import reactLogo from './assets/react.svg';
import '@fortawesome/fontawesome-free/css/all.css';
import WeatherIcon from './components/WeatherIcon';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import './App.css';

function App() {

  return (
    <>
      {/* <Navbar
    onSubmit={onSubmit}
    loading={loading}
    error={error}
    city={city}
    setCity={setCity}
    /> */}
      <WeatherIcon />
      <h1>WEATHER TODAY</h1>
      <div className="jumbotron">
        {weather.city && <WeatherDisplay weather={weather} />}
      </div>

      <Footer />
    </>
  );
}

export default App;
