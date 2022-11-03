import React from 'react'
import Orange from '../assets/images/orange-unsplash.jpg'
import AboutStyle from '../../src/AboutStyle.css'

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <img src={Orange} alt="blue background" className='AboutStyle'/>
    </div>
  )
}


