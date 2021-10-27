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
  const [ origin, setOrigin ] = useState({})
  const [ destination, setDestination ] = useState({})

  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search'>
            <div className="search-wrapper">
              <div className="journey-search">
                <MapRender journey={journey} origin={origin} destination={destination} />
                <Search setJourneyOptions={setJourneyOptions} origin={origin} setOrigin={setOrigin} destination={destination} setDestination={setDestination} />
              </div>
              <div className='journey-selector'>
                <JourneySelector setJourney={setJourney} journey={journey} journeyOptions={journeyOptions} />
              </div>
            </div>
          </Route>
          <Route path='/login'>
            <Login />
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
