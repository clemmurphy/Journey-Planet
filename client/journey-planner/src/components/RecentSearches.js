import React, { useEffect } from 'react'
import axios from 'axios'

const RecentSearches = ({ setOrigin, setDestination, recentSearches, setRecentSearches }) => {

  useEffect(() => {
    setRecentSearches([])
    const getRecentSearches = async () => {
      try {
        const { data } = await axios.get('api/journeys/owner', {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        const reverseChronSearches = data.reverse().slice(0,4)
        setRecentSearches(reverseChronSearches)
      } catch (err) {
        console.log(err.request.responseText)
      }
    }
    getRecentSearches()
  }, [])

  const handleSelect = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]
    console.log(recentSearches[selectedOption.dataset.index].origin)
    setOrigin({
      origin_string: recentSearches[selectedOption.dataset.index].origin_string,
      destination_string: recentSearches[selectedOption.dataset.index].destination_string,
      center: recentSearches[selectedOption.dataset.index].origin,
    })
    setDestination({
      origin_string: recentSearches[selectedOption.dataset.index].origin_string,
      destination_string: recentSearches[selectedOption.dataset.index].destination_string,
      center: recentSearches[selectedOption.dataset.index].destination,
    })
  }

  return (
    <>
      {
        (recentSearches && recentSearches.length > 0) && 
        <select name="recent-searches-select" id="recent-searches-select" onChange={handleSelect} defaultValue='default'>
          <option disabled={true} value='default'>Recent Searches</option>
          { recentSearches.map((search, i) => {
            return <option key={search.id} data-index={i}>{search.origin_string} to {search.destination_string}</option>
          }) }
        </select>
      }
    </>
  )
}

export default RecentSearches