import dotenv from 'dotenv'
dotenv.config()
import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MapRender from './components/MapRender'
import Search from './components/Search'
import JourneySelector from './components/JourneySelector'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  const [ journey, setJourney ] = useState({})
  const [ journeyOptions, setJourneyOptions ] = useState([])
  const [ origin, setOrigin ] = useState(null)
  const [ destination, setDestination ] = useState(null)
  const [ recentSearches, setRecentSearches ] = useState([])
  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search'>
            <div className="search-wrapper">
              <div className="journey-search">
                <MapRender journey={journey} origin={origin} destination={destination} />
                <Search setJourneyOptions={setJourneyOptions} origin={origin} destination={destination} setDestination={setDestination} setOrigin={setOrigin} recentSearches={recentSearches} setRecentSearches={setRecentSearches} />
              </div>
              <div className='journey-selector'>
                <JourneySelector setJourney={setJourney} setJourneyOptions={setJourneyOptions} journey={journey} journeyOptions={journeyOptions} origin={origin} destination={destination} setDestination={setDestination} setOrigin={setOrigin} recentSearches={recentSearches} setRecentSearches={setRecentSearches} />
              </div>
            </div>
          </Route>
          <Route path='/login'>
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
