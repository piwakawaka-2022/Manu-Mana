/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getSightingsThunk } from '../actions/birds'

import BirdSightings from './BirdSightings'
import Pagination from './Pagination'

function UserPage () {
  const birdData = useSelector(globalState => globalState.sightings)

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getSightingsThunk())
  }, [])

  const birds = birdData.filter(bird => bird.user_id === Number(id))
  const pageLimit = Math.ceil(birds.length / 4)

  return (
    <>
      <Pagination
        data = {birds}
        RenderComponent={BirdSightings}
        title={'Here\'s a list of birds you\'ve seen!'}
        pageLimit={pageLimit}
        dataLimit={4}
      />
    </>
  )
}

export default UserPage
