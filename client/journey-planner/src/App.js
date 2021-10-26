import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import MapRender from './components/MapRender'
import Search from './components/Search'
import JourneySelector from './components/JourneySelector'

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
            <MapRender journey={journey} origin={origin} destination={destination} />
            <Search setJourneyOptions={setJourneyOptions} origin={origin} setOrigin={setOrigin} destination={destination} setDestination={setDestination} />
            <JourneySelector setJourney={setJourney} journey={journey} journeyOptions={journeyOptions} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
