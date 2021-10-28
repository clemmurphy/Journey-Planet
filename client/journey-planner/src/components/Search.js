/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CurrentLocation from './CurrentLocation'
import HomeLocation from './HomeLocation'

const Search = ({ origin, setOrigin, destination, setDestination, setJourneyOptions, recentSearches, setRecentSearches }) => {

  const [ searchTerm, setSearchTerm ] = useState('')
  const [ originSearchDisplay, setOriginSearchDisplay ] = useState('')
  const [ destinationSearchDisplay, setDestinationSearchDisplay ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  const [ currentLocation, setCurrentLocation ] = useState([])
  const [ homeLocation, setHomeLocation ] = useState([])
  const [ lastSearched, setLastSearched ] = useState('')

  // On page load clear search terms
  useEffect(() => {
    setSearchResults([])
    setLastSearched('')
    setOrigin(null)
    setDestination(null)
    setOriginSearchDisplay('')
    setDestinationSearchDisplay('')
    setHomeLocation([])
    setCurrentLocation([])
    setRecentSearches([])
  }, [setSearchResults, setLastSearched, setOrigin, setDestination, setOriginSearchDisplay, setDestinationSearchDisplay, setRecentSearches])

  // Search for place by entering a name
  useEffect(() => {
    const handleSearch = async () => {
      if (searchTerm !== '') {
        const { data } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/
          ${searchTerm}.json?bbox=-0.489,51.28,0.236,51.686&types=poi,address,place&access_token=pk.eyJ1IjoiY2xlbW11cnBoeSIsImEiOiJja3V6ZXA4NDMycTVxMnVsbnY4M24ydXczIn0.kwbfg0stv5iXHMcTE4hnzw`)
        setSearchResults(data.features)
      }
    }
    // Search by postcode and add to search results
    const postcodeSearch = async () => {
      const { data } = await axios.get(`http://api.postcodes.io/postcodes/${searchTerm}`)
      const pcText = data.result.postcode
      const pcCenter = [data.result.longitude, data.result.latitude]
      const pcAddress = data.result.parliamentary_constituency
      // Normalise results to search result object format
      const postcodeResult = {
        center: pcCenter,
        text: pcText,
        properties: {
          address: pcAddress,
        },
        context: [
          {
            text: pcText,
          }
        ],
      }
      // Spread into search results
      setSearchResults([...searchResults, postcodeResult])
    }
    handleSearch()
    if (searchTerm.length > 5) {
      postcodeSearch()
    }
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
    if (origin && destination) {
      const getJourneyPlanner = async () => {
        // Get data from Journey Planner
        try {
          const { data } = await axios.get(`https://api.tfl.gov.uk/Journey/JourneyResults/${origin.center[1]},${origin.center[0]}/to/${destination.center[1]},${destination.center[0]}`)
          setJourneyOptions(data.journeys)
        } catch {
          console.log('Error getting journey planner')
        }
        // Add journey to saved journeys
        if (localStorage.token) {
          const journeyToSave = {
            origin_string: origin.text,
            destination_string: destination.text,
            origin: origin.center,
            destination: destination.center,
          }
          try {
            await axios.post('api/journeys/', journeyToSave, {
              headers: {
                Authorization: `Bearer ${localStorage.token}`,
              },
            })
          } catch (err) {
            console.log(err.request.responseText)
          }
        }
      }
      getJourneyPlanner()
      setRecentSearches([])
    }
  }, [origin, destination, setJourneyOptions, setRecentSearches, currentLocation])

  // Select the origin or destination from search results list
  const setLocations = (e) => {
    const index = e.target.dataset.key

    const place = searchResults[index]

    // Set origin
    if (lastSearched === 'Origin') {
      setOrigin(place)
      if (origin) {
        setOriginSearchDisplay(place.innerHTML)
      }
    // Set destination
    } else if (lastSearched === 'Destination') {
      setDestination(place)
      if (destination) {
        setDestinationSearchDisplay(place.innerHTML)
      }
    }

    // Reset search terms and results
    setSearchTerm('')
    setSearchResults([])
  }

  return (
    <>
      <div id='searchContainer'>
        <div className="search-display">
          { currentLocation.length > 0 ?
            <h3>Your Location</h3>
            :
            homeLocation.length > 0 ?
              <h3>Home</h3>
              :
              <h3>{ (origin) && origin.text ? origin.text : '-'}</h3>
          }
          <h3 id='to-text'>TO</h3>
          <h3>{ (destination) && destination.text ? destination.text : '-'}</h3>
        </div>
        <div className="search origin-search">
          { currentLocation.length > 0 ?
            <input type="text" placeholder="Origin" value='Your Location' disabled={true} />
            :
            homeLocation.length > 0 ?
              <input type="text" placeholder="Origin" value='Home' disabled={true} />
              :
              <input type="text" placeholder="Origin" onInput={handleInput} id="Origin" value={originSearchDisplay} autoComplete="off" />
          }
          <HomeLocation homeLocation={homeLocation} setHomeLocation={setHomeLocation} setSearchTerm={setSearchTerm} setOriginSearchDisplay={setOriginSearchDisplay} setOrigin={setOrigin} />
          <CurrentLocation currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} setSearchTerm={setSearchTerm} setOriginSearchDisplay={setOriginSearchDisplay} setOrigin={setOrigin} />
        </div>
        <div className="search destination-search">
          <input type="text" placeholder="Destination" onInput={handleInput} id="Destination" value={destinationSearchDisplay} autoComplete="off" />
        </div>
      </div>
      <div className="search-results">
        {searchResults.length > 0 && <h2>Select Your {lastSearched}</h2> }
        {searchResults.length > 0 ? 
          searchResults.map((result, i) => {
            return (
              <div className="search-result" key={i} onClick={setLocations} data-key={i}>
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