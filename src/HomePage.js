import React, { useState, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import img from './Data/img2.jpg'
import axios from 'axios'

function HomePage() {
  const [weather, setWeather] = useState({
    celcius: 19,
    humidity: 20,
    speed: 20,
    latitude: '54.32',
  })
  useEffect(() => {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,wind_speed_10m'

    axios
      .get(url)
      .then((res) => {
        setWeather({
          ...weather,
          celcius: res.weather.current.temperature_2m,
          latitude: res.weather.latitude,
          humidity: res.weather.curent.realative_humidity_2m,
          speed: res.weather.current.wind_speed_10m,
        })
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className='section'>
      <div className='section-container'>
        <div className='weather-container'>
          <div className='search'>
            <input
              type='text'
              placeholder='enter city latitude'
              className='search-input'
            />
            <button className='search-btn'>
              <CiSearch className='search-icon' />
            </button>
          </div>
          <div className='elements'>
            <img src={img} alt='weather image' />
            <h2>{weather.celcius}°C</h2>
            <h3>temperature</h3>
            {/* this is the section that deals with humidity and wind */}
            <div className='info'>
              <div className='info-more'>
                <img src={img} alt='humidity' />
                <div className='humidity'>
                  <p>20%</p>
                  <p>humidity</p>
                </div>
              </div>
              <div className='info-more'>
                <img src={img} alt='win' />
                <div className='win'>
                  <p>20 km/h</p>
                  <p>wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
