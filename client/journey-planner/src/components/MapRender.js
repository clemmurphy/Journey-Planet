import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import parseWaypoints from '../helpers/parseWaypoints'

const MapRender = ({ journey }) => {

  const mapContainer = useRef(null)
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2xlbW11cnBoeSIsImEiOiJja3V6ZXA4NDMycTVxMnVsbnY4M24ydXczIn0.kwbfg0stv5iXHMcTE4hnzw'

  let data = [51.508530, -0.076132]

  const lineColours = {
    'walking': '#FF8D2E',
    'tube': '#00554E',
    'bus': '#F478AA',
    'national-rail': '#4677EC',
    'tflrail': '#1BAE81',
  }

  useEffect(() => {

    // If there is a selected journey, process the waypoints
    if (journey.legs) {
      console.log('Selected journey:', journey)
      data = []
      journey.legs.forEach((leg) => {
        data.push(parseWaypoints(leg))
      })
      console.log('Waypoint data:', data)
    }

    // Add and configure map 
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: new mapboxgl.LngLat(-0.076132, 51.508530),
      zoom: 8.3,
    })

    // On map load, add all the data to the map
    map.on('load', () => {
      // Add map lines for each leg of the journey
      if (data[0].length > 0) {
        data.forEach((legWaypoints, index) => {
          // Add a new data source
          map.addSource(`${legWaypoints[0][0]}`, {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'LineString',
                'coordinates': legWaypoints,
              },
            },
          })
          // Add styled lines
          map.addLayer({
            'id': `${legWaypoints[0][0]}`,
            'type': 'line',
            'source': `${legWaypoints[0][0]}`,
            'layout': {
              'line-join': 'round',
              'line-cap': 'round',
            },
            'paint': {
              'line-color': `${lineColours[journey.legs[index].mode.id]}`,
              'line-width': 6,
              'line-opacity': 0.8,
            },
          })
        })
        // Create a 'LngLatBounds' with both corners at the first coordinate
        const bounds = new mapboxgl.LngLatBounds(
          data[0][0],
          data[0][0]
        )
        
        // Extend the 'LngLatBounds' to include every coordinate in the bounds result
        for (const coordSet of data) {
          for (const coord of coordSet) {
            bounds.extend(coord)
          }
        }
        
        map.fitBounds(bounds, {
          padding: 20,
        })
      }
    })

    return () => map.remove()
  }, [journey])

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  )
}

export default MapRender