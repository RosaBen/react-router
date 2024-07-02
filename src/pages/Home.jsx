import { useState } from "react";


const getWeatherOfTheDay = () => {
  return "sunny";
};

export default function Home() {
  
  const [weather, setWeather] = useState(null);
  return (
    <>
    <h1>Weather of the day</h1>

    {weather!=null
    ?(<p>today's weather is {weather}</p>)
    :(<button 
      type="button"
      onClick={()=>{
        const weatherOfTheDay = getWeatherOfTheDay();
        setWeather(weatherOfTheDay);
      }}>Get weather</button>)
    }
    
    </>
  )
}
