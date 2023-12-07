import { useState } from 'react';
import reactLogo from './assets/react.svg';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/Navbar';
import WeatherIcon from './components/WeatherIcon';

import Footer from './components/Footer';


import './App.css';

function App() {

  return (
    <>
      <WeatherIcon />
      <h1>WEATHER TODAY</h1>
      <Footer />
    </>
  );
}

export default App;
