import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'
import AddBirdSighting from './AddBirdSighting'
import { Typography } from '@mui/material'
import { Container } from '@mui/material';

function Home () {
  const auth = useSelector((redux) => redux.auth)

  return (
    <>
      <Container color='secondary' className='map-select-container' align='center'>
        <Container className='map-heading'>
          {auth.isAuthenticated ? <AddBirdSighting /> : null}
          <Typography>These are the manu that have been seen recenly in your neighbourhood!</Typography>
        </Container>
        <Map />
      </Container>
    </>
  )
}

export default Home
