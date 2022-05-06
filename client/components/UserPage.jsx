/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getSightingsThunk } from '../actions/birds'
import BirdSightings from './BirdSightings'

function UserPage () {
  const birds = useSelector(globalState => globalState.sightings)

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getSightingsThunk())
  }, [])

  const birdData = birds.filter(bird => bird.user_id === Number(id))

  return (
    <>
      <h1>{'Here\'s a list of birds you\'ve seen!'}</h1>
      <div>
        {birdData.map((oneBird) => <BirdSightings key={oneBird?.users_birds_id} bird={oneBird} />)}
      </div>
    </>
  )
}

export default UserPage
