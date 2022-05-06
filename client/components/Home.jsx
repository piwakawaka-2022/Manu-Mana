import React from 'react'
import Map from './Map'

function Home () {
  return (
    <>
    <div className='map-select-container'>
      <div className='map-heading'>
          <h3>These are the manu that have been seen recenly in your neighbourhood! </h3>
      </div>
      <Map />
    </div>
    </>
  )
}

export default Home
