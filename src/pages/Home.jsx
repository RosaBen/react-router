import { useRouteLoaderData } from "react-router-dom";


export default function Home() {
  
  const weather = useRouteLoaderData("app");

  return (
    <>
    <h1>Weather of the day</h1>

    <p>today&apos;s weather is {weather}</p>
    

    </>
  )
}
