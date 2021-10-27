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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, libero. Architecto consequatur quam dicta, dolor sunt quisquam quas, quod hic, exercitationem quae recusandae.</p>
        <p>Dolore delectus, totam nesciunt nemo culpa sit nulla ullam.</p>
        <button onClick={redirect}>Plan Your Journey <i className="fas fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default Home