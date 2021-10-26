/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CurrentLocation from './CurrentLocation'

const Search = ({ origin, setOrigin, destination, setDestination, setJourneyOptions }) => {

  const [ searchTerm, setSearchTerm ] = useState('')
  const [ originSearchDisplay, setOriginSearchDisplay ] = useState('')
  const [ destinationSearchDisplay, setDestinationSearchDisplay ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  const [ currentLocation, setCurrentLocation ] = useState([])
  const [ lastSearched, setLastSearched ] = useState('')

  // On page load clear search terms
  useEffect(() => {
    setSearchResults([])
    setLastSearched('')
    setOrigin({})
    setDestination({})
    setOriginSearchDisplay('')
    setDestinationSearchDisplay('')
  }, [])

  // Search for place by entering a name
  useEffect(() => {
    const handleSearch = async () => {
      if (searchTerm !== '') {
        const { data } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/
          ${searchTerm}.json?bbox=-0.489,51.28,0.236,51.686&types=poi,address,place&access_token=pk.eyJ1IjoiY2xlbW11cnBoeSIsImEiOiJja3V6ZXA4NDMycTVxMnVsbnY4M24ydXczIn0.kwbfg0stv5iXHMcTE4hnzw`)
        setSearchResults(data.features)
      }
    }
    handleSearch()
  }, [searchTerm, setSearchResults])

  // Handle search inputs
  const handleInput = (e) => {
    const term = e.target.value
    setLastSearched(e.target.id)
    setSearchTerm(term)
    if (e.target.id === 'Origin') {
      setOriginSearchDisplay(term)
    } else if (e.target.id === 'Destination') {
      setDestinationSearchDisplay(term)
    }
  }

  useEffect(() => {
    // If both results have center co-ords, search on TfL Journey Planner
    if (origin.center && destination.center) {
      console.log('Origin center:', origin.center, 'Destination center:', destination.center)
      const getJourneyPlanner = async () => {
        try {
          console.log('Getting journey data')
          const { data } = await axios.get(`https://api.tfl.gov.uk/Journey/JourneyResults/${origin.center[1]},${origin.center[0]}/to/${destination.center[1]},${destination.center[0]}`)
          setJourneyOptions(data.journeys)
        } catch {
          console.log('Error getting journey planner')
        }
      }
      getJourneyPlanner()
    }
  }, [origin, destination])

  // Select the origin or destination from search results list
  const setLocations = (e) => {
    const key = e.target.parentNode.dataset.key
    const placeToSet = searchResults.filter(res => {
      return res.id === key
    })

    const place = placeToSet[0]

    // Set origin
    if (lastSearched === 'Origin') {
      setOrigin(place)
      setOriginSearchDisplay(place.text)
      console.log('Set origin to:', place)
    // Set destination
    } else if (lastSearched === 'Destination') {
      setDestination(place)
      setDestinationSearchDisplay(place.text)
      console.log('Set destination to:', place)
    }

    // Reset search terms and results
    setSearchTerm('')
    setSearchResults([])
  }

  return (
    <>
      <div id='searchContainer'>
        <div className="search-display">
          <h3>{origin.text ? origin.text : '-'}</h3>
          <h3>to</h3>
          <h3>{destination.text ? destination.text : '-'}</h3>
        </div>
        <div className="search origin-search">
          { currentLocation.length > 0 ?
            <input type="text" placeholder="Origin" value='Your Location' />
            :
            <input type="text" placeholder="Origin" onInput={handleInput} id="Origin" value={originSearchDisplay} autoComplete="off" />
          }
          <CurrentLocation currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} setSearchTerm={setSearchTerm} setOriginSearchDisplay={setOriginSearchDisplay} setOrigin={setOrigin} />
        </div>
        <div className="search destination-search">
          <input type="text" placeholder="Destination" onInput={handleInput} id="Destination" value={destinationSearchDisplay} autoComplete="off" />
        </div>
      </div>
      <div className="search-results">
        {searchResults.length > 0 && <h3>Select Your {lastSearched}</h3> }
        {searchResults.length > 0 ? 
          searchResults.map(result => {
            return (
              <div className="search-result" key={result.id} onClick={setLocations} data-key={result.id}>
                <h3>{result.text}</h3>
                <p>{result.properties.address}</p>
                <p>{result.context[0].text}</p>
              </div>
            )
          })
          :
          <></>
        }
      </div>
    </>
  )
}

export default Search