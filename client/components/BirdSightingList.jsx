import React from 'react'
import { useSelector } from 'react-redux'

import Pagination from './Pagination'
import BirdSightings from './BirdSightings'

function BirdSightingsList () {
  const birds = useSelector(globalState => globalState.sightings)

  const pageLimit = Math.ceil(birds.length / 4)

  return (
    <>
      <Pagination
        data = {birds}
        RenderComponent={BirdSightings}
        title="Manu seen recently in Poneke!"
        pageLimit={pageLimit}
        dataLimit={4}
      />
    </>
  )
}

export default BirdSightingsList
