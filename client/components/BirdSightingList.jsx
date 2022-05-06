import React from 'react'
import { useSelector } from 'react-redux'

import BirdSightings from './BirdSightings'

function BirdSightingsList () {
  const birds = useSelector(globalState => globalState.birdSightings)

  return (
    <>
      <h1>Birds you're likely to see in Poneke!</h1>
      <div>
        {birds.map((oneBird) => <BirdSightings key={oneBird?.id} bird={oneBird} />)}
      </div>
    </>
  )
}

export default BirdSightingsList
