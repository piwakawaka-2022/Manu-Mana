import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'
import AddBirdSighting from './AddBirdSighting'
import MasonryImageList from './MasonryImageList'
import { Container } from '@mui/material'

function Home () {
  const auth = useSelector((redux) => redux.auth)

  return (
    <>
      <Container align='center'>
        <div className='map-select-container'>
          <div className='map-heading'>
            {auth.isAuthenticated ? <AddBirdSighting /> : null}
            <h3>These are the manu that have been recently sighted in your neighbourhood! </h3>
          </div>
          <Map />
        </div>
        <div>
          <MasonryImageList/>
        </div>
      </Container>
    </>
  )
}

export default Home
