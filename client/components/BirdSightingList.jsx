import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSightingsThunk } from '../actions/birds'

import BirdSightings from './BirdSightings'

function BirdSightingsList () {
  const birds = useSelector(globalState => globalState.sightings)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSightingsThunk())
  }, [])

  return (
    <>
      <h1>Manu seen recently in Poneke!</h1>
      <div>
        {birds.map((oneBird) => <BirdSightings key={oneBird?.users_birds_id} bird={oneBird} />)}
      </div>
    </>
  )
}

export default BirdSightingsList
