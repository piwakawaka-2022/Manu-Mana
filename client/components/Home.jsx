import React from 'react'
import Map from './Map'
import AddBirdSighting from './AddBirdSighting'

function Home () {
  return (
    <>
      <div className='map-select-container'>
        <div className='map-heading'>
          <div><AddBirdSighting /></div>
          <h3>These are the manu that have been seen recenly in your neighbourhood! </h3>
        </div>
        <Map />
      </div>
    </>
  )
}

export default Home
