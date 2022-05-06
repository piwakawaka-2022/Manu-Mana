/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getSightingsThunk } from '../actions/birds'
import BirdSightings from './BirdSightings'

function UserPage () {
  const birds = useSelector(globalState => globalState.sightings)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSightingsThunk())
  }, [])

  // const birdData = birds.filter(bird => bird === Number(id))

  return (
    <>
      <h1>{'Here\'s a list of birds you\'ve seen!'}</h1>
      <div>
        {/* {birdData.map((oneBird) => <BirdSightings key={oneBird?.id} bird={oneBird} />)} */}
      </div>
    </>
  )
}

export default UserPage
