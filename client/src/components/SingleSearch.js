/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = ({ formData, setFormData }) => {

  const [ searchTerm, setSearchTerm ] = useState('')
  const [ locationSearchDisplay, setLocationSearchDisplay ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  // On page load clear search terms
  useEffect(() => {
    setSearchResults([])
    setSearchTerm('')
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
    setSearchTerm(term)
    setLocationSearchDisplay(term)
  }

  // Select the origin or destination from search results list
  const setLocations = (e) => {
    const key = e.target.dataset.key
    const placeToSet = searchResults[key]

    const place = placeToSet

    setFormData({
      ...formData,
      home: place.center,
      homeName: place.text,
    })
    // Reset search terms and results
    setSearchTerm('')
    setSearchResults([])
  }

  return (
    <>
      <div id='searchContainer'>
        <div className="search origin-search">
          <input type="text" placeholder="Home Location" onInput={handleInput} id="Origin" value={locationSearchDisplay} autoComplete="off" />
        </div>
      </div>
      <div className="search-results">
        {formData.home && <h3>Home selected: {formData.homeName}</h3>}
        {searchResults.length > 0 && <h3>Select Your Location</h3> }
        {searchResults.length > 0 ? 
          searchResults.map((result, index) => {
            return (
              <div className="search-result" key={index} onClick={setLocations} data-key={index}>
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