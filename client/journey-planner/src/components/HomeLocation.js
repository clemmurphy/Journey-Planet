import React from 'react'
import jwt from 'jsonwebtoken'
import axios from 'axios'

const HomeLocation = ({ homeLocation, setHomeLocation, setSearchTerm, setOrigin }) => {

  const getHomeLocation = async () => {
    if (localStorage.token) {
      const decodedJwt = jwt.decode(localStorage.token)
      const userId = decodedJwt.sub
      try {
        const { data } = await axios.get(`api/users/${userId}`)
        setHomeLocation(data.home)
        setOrigin({
          center: data.home,
          text: 'Home',
        })
        console.log('Home location:', data.home)
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('Can\'t find your home location!')
    }
  }

  const clearHomeLocation = () => {
    setHomeLocation([])
    setSearchTerm('')
  }

  return (
    <div id="HomeLocationWrapper">
      { homeLocation.length > 0 ? 
        <div className="location-dot-active" onClick={clearHomeLocation}><i className="fas fa-home"></i></div>
        :
        <div className="location-dot" onClick={getHomeLocation}><i className="fas fa-home"></i></div>
      }
    </div>
  )
}

export default HomeLocation