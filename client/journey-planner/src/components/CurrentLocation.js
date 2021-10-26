import React from 'react'

const CurrentLocation = ({ currentLocation, setCurrentLocation, setSearchTerm, setOrigin }) => {

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const originData = {
          center: [position.coords.longitude, position.coords.latitude],
        }
        setCurrentLocation(originData.center)
        setOrigin(originData)
      })
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  const clearCurrentLocation = () => {
    setCurrentLocation([])
    setSearchTerm('')
  }

  return (
    <div id="CurrentLocationWrapper">
      { currentLocation.length > 0 ? 
        <div className="location-dot-active" onClick={clearCurrentLocation}><i className="fas fa-map-marker-alt"></i></div>
        :
        <div className="location-dot" onClick={getCurrentLocation}><i className="fas fa-map-marker-alt"></i></div>
      }
    </div>
  )
}

export default CurrentLocation