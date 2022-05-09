import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'
import AddBirdSighting from './AddBirdSighting'
import Container from '@mui/material/Container'
import MasonryImageList from './MasonryImageList'
import Footer from './Footer'

function Home () {
  const auth = useSelector((redux) => redux.auth)

  return (
    <>
      <Container align='center'>
        <div className='map-select-container'>
          <div className='map-heading'>
            {auth.isAuthenticated ? <AddBirdSighting /> : null}
            <h3>RECENTLY SIGHTED MANU IN YOUR AREA </h3>
          </div>
          <Map />
        </div>
        <div>
          <MasonryImageList/>
        </div>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home
