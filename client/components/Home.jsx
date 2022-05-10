import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'
import AddBirdSighting from './AddBirdSighting'
import Container from '@mui/material/Container'
import MasonryImageList from './MasonryImageList'
import Box from '@mui/material/Box'

function Home () {
  const auth = useSelector((redux) => redux.auth)

  return (
    <>
      <Container align='center'>
        <Box height='250px'></Box>
        <div className='map-select-container'>
          <div className='map-heading'>
            {auth.isAuthenticated ? <AddBirdSighting /> : null}
            <h3>RECENTLY SIGHTED MANU IN YOUR AREA</h3>
          </div>
          <Map />
        </div>
        <div>
          <Box height='250px'></Box>
          <MasonryImageList/>
        </div>
      </Container>
      <div>
        <Box height='250px'></Box>
      </div>
    </>
  )
}

export default Home
