import React,{useEffect} from 'react'
import { ApiCall } from '../ApiCall'



const Weather = () => {
useEffect(() => {
ApiCall()
},[])




  return (
    <div>
      <ApiCall/>
    </div>
  )
}

export default Weather

