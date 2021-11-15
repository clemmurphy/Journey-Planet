import React from 'react'
import planetImage from '../images/planet.svg'
import { useHistory } from 'react-router-dom'

const Home = () => {

  const history = useHistory()

  const redirect = () => {
    history.push('/search')
  }

  return (
    <div id="homeWrapper">
      <div className="image-container">
        <img src={planetImage} alt="planet with telescope" />
      </div>
      <div className="text-container">
        <h1><i className="fas fa-globe-europe"></i> Journey Planet</h1>
        <p>Sometimes traversing London can seem like a mission to Mars. Make your life simpler, quicker and hassle-free by planning your journeys ahead of time using real-time data and up-to-the-minute travel advice.</p>
        <p>Before you make your journey, planet.</p>
        <button onClick={redirect}>Plan Your Journey <i className="fas fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default Home