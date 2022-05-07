import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'
import AddBirdSighting from './AddBirdSighting'

function Home () {
  // const birds = useSelector(globalState => globalState.birds)
  const auth = useSelector((redux) => redux.auth)

  // const birdData = //bird selected from drop down list

  return (
    <>
      <div className='map-select-container'>
        <div className='map-heading'>
          <div>{auth.isAuthenticated ? <AddBirdSighting /> : null }</div>
          <h3>These are the manu that have been seen recenly in your neighbourhood! </h3>
        </div>
        <Map />
      </div>
    </>
  )
}

export default Home
