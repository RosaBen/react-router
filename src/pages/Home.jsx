import { useState, useEffect } from "react";


const getWeatherOfTheDay = () => {
  return "sunny";
};

export default function Home() {
  
  const [weather, setWeather] = useState();

  useEffect(()=>{
    const weatherOfTheDay = getWeatherOfTheDay();
    setWeather(weatherOfTheDay);
  }, [])
  return (
    <>
    <h1>Weather of the day</h1>

    {weather!=null && <p>today&apos;s weather is {weather}</p>}
    

    </>
  )
}
