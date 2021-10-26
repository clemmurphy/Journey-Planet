import React from 'react'

const JourneySelector = ({ journeyOptions, setJourney }) => {

  const selectJourney = (e) => {
    const journeyId = e.target.dataset.journeyid
    setJourney(journeyOptions[journeyId])
  }

  return (
    <>
      { journeyOptions.length > 0 ?
        <div className="journey-options-list">
          { journeyOptions.map((j, i) => {
            return (
              <div className="journey-option" key={i} data-journeyid={i} onClick={selectJourney}>
                <h3><i className="fas fa-stopwatch"></i> {j.duration}mins</h3>
                <h3><i className="fas fa-map-marked-alt"></i> {j.legs.length} legs</h3>
                <div className='steps-wrapper'>
                  { j.legs.map((l, i) => {
                    if (l.mode.id === 'walking') {
                      return (
                        <div className='mode-wrapper' key={i}>
                          <div className="journey-duration">
                            <p className="leg-names">{l.departurePoint.commonName}</p>
                            <i className="fas fa-walking"></i>
                            { l.distance && <p>{(l.distance / 1000).toFixed(1)}km</p> }
                          </div>
                          <i className="fas fa-caret-right"></i>
                        </div>
                      )
                    } else if (l.mode.id === 'bus') {
                      return (
                        <div className='mode-wrapper' key={i}>
                          <div className="journey-duration">
                            <p className="leg-names">{l.departurePoint.commonName}</p>
                            <i className="fas fa-bus"></i>
                            <div className="bus-route-options">
                              {l.routeOptions.map((bus, i) => {
                                if (i < l.routeOptions.length - 1) {
                                  return <p key={i}>{bus.name} /</p>
                                } else {
                                  return <p key={i}>{bus.name}</p>
                                }
                              })}
                            </div>
                            <p>{l.path.stopPoints.length} stops</p>
                          </div>
                          <i className="fas fa-caret-right"></i>
                        </div>
                      )
                    } else if (l.mode.id === 'tube') {
                      return (
                        <div className='mode-wrapper' key={i}>
                          <div className="journey-duration">
                            <p className="leg-names">{l.departurePoint.commonName}</p>
                            <i className="fas fa-subway"></i>
                            <p>{l.path.stopPoints.length} stops</p>
                          </div>
                          <i className="fas fa-caret-right"></i>
                        </div>
                      )
                    } else if (l.mode.id === 'national-rail' || l.mode.id === 'tflrail') {
                      return (
                        <div className='mode-wrapper' key={i}>
                          <div className="journey-duration">
                            <p className="leg-names">{l.departurePoint.commonName}</p>
                            <i className="fas fa-train"></i>
                            <p>{l.path.stopPoints.length} stops</p>
                          </div>
                          <i className="fas fa-caret-right"></i>
                        </div>
                      )
                    }
                  }) }
                </div>
              </div>
            )
          }) }
        </div>
        :
        <></>
      }
    </>
  )
}


export default JourneySelector