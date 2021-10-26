const parseWaypoints = (leg) => {
  const coords = JSON.parse(leg.path.lineString)
  const reverseCoords = (coords) => {
    coords.map(x => {
      const t = x[0]
      x[0] = x[1]
      x[1] = t
      return x
    })
    return coords
  }
  reverseCoords(coords)
  return coords
}

export default parseWaypoints