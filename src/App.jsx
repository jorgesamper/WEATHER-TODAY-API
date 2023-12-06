import { useState } from 'react';
import reactLogo from './assets/react.svg';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>WEATHER</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <footer className="bg-body-light text-white">
        <div className="container pt-5 pb-2">
          <p className="text-secondary text center">
            Powered by:{' '}
            <a
              href="https://www.weatherapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Weather API"
            >
              WeatherAPI.com
            </a>
          </p>
          <p className="text-secondary text-center">Made by Jorge Samper</p>

          {/* ICONS */}
          <div className="text-center text-secondary">
            <a
              href="https://www.linkedin.com/in/jorgesamperarias/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary me-3"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/jorgesamper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              <i
                className="fab fa-github fa-2x"
                style={{ marginLeft: '15px' }}
              ></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;