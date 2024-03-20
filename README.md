This is my github repo ('https://github.com/chukwuernest/ctd-project)

For the react icon install react icon using(npm install react-icons --save)

Also i install axios to use in getting the GET request from the Api( npm install react-axios)

i got the api from (https://open-meteo.com/)

the api for the current weather focus from the meteo app that i use,( api =
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,rain,snowfall,cloud_cover,wind_speed_10m&timezone=auto)

and for the daily weather focus( https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,sunrise,sunset,rain_sum,snowfall_sum,wind_speed_10m_max&timezone=auto&forecast_days=1)

I use Math.round to change the speed and temperature to whole number

to search for value input latitude ranging from -90 to 90

for each latitude inputed the app displays longitude(13.41) and also the following
a.if its cloudy and how cloudy in number value and in %
b.if it will rain and in number value and in mm
c. if it will snow and in number value and in cm
e.the temperature of the latitude
f.the wind speed in km/h and also distance above sea level
g.and the timezone

to rout between pages we use react router (npm install react-router-dom)
