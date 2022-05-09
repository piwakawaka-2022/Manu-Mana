import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'
import AddBirdSighting from './AddBirdSighting'
import { Typography } from '@mui/material'

function Home () {
  const auth = useSelector((redux) => redux.auth)

  return (
    <>
      <div className='map-select-container'>
        <div className='map-heading'>
          {auth.isAuthenticated ? <AddBirdSighting /> : null}
          <Typography>These are the manu that have been seen recenly in your neighbourhood!</Typography>
        </div>
        <Map />
      </div>
    </>
  )
}

export default Home
