import React from 'react'
import Display from './Display'

const Homepage = () => {
  return (
    <div>
        <Display name = "Ram" address = "Ayodhya"/>
        <Display name = "Krishna" address = "Mathura"/>
        <Display name = "Shiva" address = "Kailash"/>
        <Display name = "Narayan" address = "Vaikuntha"/>
        <Display address = "Vaikuntha"/>
        <Display name = "Ganesh"/>
    </div>
  )
}

export default Homepage