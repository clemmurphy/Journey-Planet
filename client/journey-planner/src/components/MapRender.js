import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import parseWaypoints from '../helpers/parseWaypoints'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

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
    'dlr': '#F478AA',
  }

  useEffect(() => {

    // If there is a selected journey, process the waypoints
    if (journey.legs) {
      data = []
      journey.legs.forEach((leg) => {
        data.push(parseWaypoints(leg))
      })
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

      // If the user is logged in, get their home location
      if (localStorage.token) {
        let homeCoords = []
        const getHomeLocation = async () => {
          const decodedJwt = jwt.decode(localStorage.token)
          const userId = decodedJwt.sub
          try {
            const { data } = await axios.get(`api/users/${userId}`)
            homeCoords = data.home
            const homeMarker = {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': homeCoords,
                  },
                  'properties': {
                    'title': 'Home',
                    'description': 'Your saved home',
                  },
                }
              ],
            }
    
            for (const feature of homeMarker.features) {
              // create a HTML element for each feature
              const home = document.createElement('div')
              home.className = 'homeMarker'
              // make a marker for each feature and add it to the map
              new mapboxgl.Marker(home)
                .setLngLat(feature.geometry.coordinates)
                .setPopup(
                  new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML(
                      `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                    )
                )
                .addTo(map)
            }
          } catch (err) {
            console.log(err)
          }
        }
        getHomeLocation()
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