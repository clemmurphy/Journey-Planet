# Journey Planet
### A full-stack journey planning app for London's public transport system
[Live on Heroku](https://journeyplanet.herokuapp.com/)

![screencapture-journeyplanet-herokuapp-search-2021-11-15-11_58_37](https://user-images.githubusercontent.com/25615907/141780717-81b449b1-b54e-4c96-b2f1-9b1df3dd8860.png)

## The Brief
I was tasked to create a full-stack web app using a custom Django/Postgres back end and a React front end. The app needed to allow users to create, read, update and delete using my own custom API, and handle data from third-party sources. The database needed to have relationships and support for users.

## Overview & Concept
My requirement was to make something with real-world utility. Apps like Citymapper and the TfL Journey Planner are hugely popular, and I wanted to challenge myself to process real-world data and use multiple third party APIs.

My initial plan for feature requirements was:

- Destination and origin search
- Support for browser location finding
- Users saving home location for quick access
- Displaying journey information on a map
- Showing a user's recent searches for easy access
- Mobile responsive design

## Technology

For the front end, I used React as a JavaScript framework, with Django as my main server framework. I used Postgres as my database system. All of this was hosted on Heroku.

For mapping, I used Mapbox's MapboxGL, and Mapbox's Places API to find landmark locations. For journey searching, I used TfL's open API.

## Approach

### Searching
My main idea was to make a search that supported multiple types of search query: places, postcodes and direct lat/long co-ords. This is to make it as user-friendly as possible, and to enable users to search for their own home address, or search for the name of a restaurant or pub for example. To do this, I had to query two different APIs from the handleSearch functions on my search bars and merge the results.

### Journey Plotting
When a user selects a search result, the latitude and longitude of the location is used to make a query to the TfL API, and displays the options for travel on the search page. When a journey is selected, the journey's legs and modes are plotted onto the map, which can be scrolled and interacted with. The legs are coloured according to mode, and the steps are shown on the journey selector.

### Saved Locations
Users can also use their current location from the browser geolocation API, or select their saved home address when they are logged in. Enabling either of these options overrides the current origin.

### Recent Searches
If a user is logged in, their recent searches are saved and appear at the top of the journey options screen. Selecting one of these from the database will run the relevant search as normal using those locations as start and end points.

## Challenges

### Multiple data sources
The main challenge for me was to normalise all of this data from postcode, place and location data into just the data we needed to make the query. That model was created in my database, and included latitude and longitude, name, postcode and address. When the APIs were queried, the relevant data was added to the app in that format.

### MapboxGL
Having never used MapboxGL before, getting to grips with it was a small challenge that I overcame fairly quickly. After building a small prototype, I used my learnings from that to build my models, incorporating MapboxGL's requirements for latitude and longitude and GeoJSON formats.
