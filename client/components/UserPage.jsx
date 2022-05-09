/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import BirdSightings from './BirdSightings'
import Pagination from './Pagination'

function UserPage () {
  const birdData = useSelector(globalState => globalState.sightings)

  const { id } = useParams()

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
