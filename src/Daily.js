import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import axios from 'axios'
import Links from './links'

function Daily() {
  const [data, setData] = useState({
    celcius: 9,
    sunrise: 4,
    sunset: 4,
    speed: 2,
    latitude: 50.32,
    longitude: 2.22222,
    Elevation: 10,
    rain: 10,
    snowfall: 10,
    timezone: 'place',
  })
  const [latitude, setlatitude] = useState('')
  const [error, setError] = useState('')

  //this is to make the Error message disapper after sometime
  useEffect(() => {
    const timeout = setTimeout(() => {
      setError()
    }, 5000)
  }, [error])

  const handleClick = () => {
    if (Math.round(latitude) !== '') {
      const url = `
      https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=13.41&daily=temperature_2m_max,sunrise,sunset,rain_sum,snowfall_sum,wind_speed_10m_max&timezone=auto&forecast_days=1`

      axios
        .get(url)
        .then((res) => {
          // to get the object to do what models that you choose to display use
          console.log(res.data)
          setData({
            ...data,
            celcius: res.data.daily.temperature_2m_max,
            sunset: res.data.daily.sunset,
            sunrise: res.data.daily.sunrise,
            speed: res.data.daily.wind_speed_10m_max,
            latitude: res.data.latitude,
            longitude: res.data.longitude,
            elevation: res.data.elevation,
            rain: res.data.daily.rain_sum,
            snowfall: res.data.daily.snowfall_sum,
            timezone: res.data.timezone,
          })
          setError('')
        })
        .catch((err) => {
          if (err.response.status == 400) {
            setError('invalid Latitude must be in range of -90° to 90°')
          } else {
            setError('')
          }
          // console.log(err)
        })
    }
  }
  return (
    <div className='section' id='section'>
      <div className='section-container' id='section-container'>
        <div className='weather-container' id='weather-container'>
          <div className='current'>
            <h4>this is the daily weather focus</h4>

            <div className='pages'>
              <ul>
                <li>
                  <a href='/'>current</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='search'>
            <input
              type='text'
              placeholder='enter city latitude E.g 50 or 50.56552'
              className='search-input'
              onChange={(e) => setlatitude(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setlatitude(handleClick)
              }}
            />
            <button className='search-btn'>
              <CiSearch className='search-icon' onClick={handleClick} />
            </button>
          </div>
          <div className='error'>
            <h4>{error}</h4>
          </div>
          <div className='elements'>
            <img src='/data/sunny.png' alt='weather image' />
            <h2>{Math.round(data.celcius)}°C</h2>
            <h3>location {data.timezone}</h3>
            <h4>
              latitude {data.latitude},longitude{data.longitude}°E
            </h4>
            <h4>{data.elevation}m above sea level</h4>
            <h4>
              sunrise:{data.sunrise},sunset:
              {data.sunset}
            </h4>
            {/* this is the section that deals with humidity and wind */}
            <div className='info'>
              <div className='info-more'>
                <img src='/data/rain.png' alt='humidity' />
                <div className=''>
                  <p> rainfall:{data.rain}mm</p>
                  <p>
                    snowfall:
                    {data.snowfall}cm
                  </p>
                </div>
              </div>
              <div className='info-more'>
                <img src='/data/wind.png' alt='win' />
                <div className='win'>
                  <p>{Math.round(data.speed)} km/h</p>
                  <p>wind</p>
                </div>
              </div>
            </div>
            <Links />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Daily
