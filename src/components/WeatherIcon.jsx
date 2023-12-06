import React from 'react';

const WeatherIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 120 120" id="weather" width="100" height="100">
      <defs>
        <linearGradient id="a" x1="60" x2="60" y1="-725.988" y2="-845.988" gradientTransform="matrix(1 0 0 -1 0 -725.988)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1d6ff2"></stop>
          <stop offset="1" stopColor="#1ac8fc"></stop>
        </linearGradient>
        <linearGradient id="b" x1="-550.983" x2="-550.983" y1="-440.505" y2="-442.505" gradientTransform="matrix(21.5 0 0 -21.5 11884.645 -9443.866)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffc700"></stop>
          <stop offset="1" stopColor="#ffea00"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#a)" d="M26,0H94a25.94821,25.94821,0,0,1,26,26V94a25.94821,25.94821,0,0,1-26,26H26A25.94821,25.94821,0,0,1,0,94V26A25.94821,25.94821,0,0,1,26,0Z"></path>
      <circle cx="38.5" cy="48.5" r="21.5" fill="url(#b)"></circle>
      <path fill="#fff" fillRule="evenodd" style={{ isolation: 'isolate' }} d="M43,90a16.51916,16.51916,0,0,1-4-32.4,21.00077,21.00077,0,0,1,40.9-6.3,21.8614,21.8614,0,0,1,3.6-.3,19.5,19.5,0,0,1,0,39H43Z" opacity=".88"></path>
    </svg>
  );
};

export default WeatherIcon;