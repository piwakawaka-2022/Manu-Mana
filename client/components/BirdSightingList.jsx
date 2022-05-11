import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '@mui/material'
import Pagination from './Pagination'
import BirdSightings from './BirdSightings'

function BirdSightingsList () {
  const birds = useSelector(globalState => globalState.sightings)

  const pageLimit = Math.ceil(birds.length / 4)

  return (
    <>
      <Container className='zoom' align='center'>
        <Pagination
          data = {birds}
          RenderComponent={BirdSightings}
          title="MANU RECENTLY SIGHTED IN PŌNEKE"
          pageLimit={pageLimit}
          dataLimit={4}
        />
      </Container>
    </>
  )
}

export default BirdSightingsList
