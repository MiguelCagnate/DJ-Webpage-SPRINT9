import React,{useEffect, useState} from 'react'
import { ApiCall } from '../ApiCall'



const Weather = () => {

  const [weather, setWeather] = useState(null)


useEffect(() => {
ApiCall(setWeather)
},[])




  return (
    <d>
     {weather !== null ?('Hay Weather') :(' pailas el weather')}; 
    </d>
  )
}

export default Weather

