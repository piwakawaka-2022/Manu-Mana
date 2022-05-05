import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import GlobalBird from './GlobalBird'

// The data we want to get for this page is an array of recently sighted birds (limit to 10 or so?)
// The API call will connect to the get all birds users route ('/api/v1/birdlist')
// Action/Thunk will return an array of bird objects { name, maori_name, timestamp, location }
// Can probably use same action/thunk for this page and UserPage as it is returning the same information
function GlobalBirdList () {
  const birds = useSelector(globalState => globalState.birds)
  console.log(birds)
  return (
    <>
      <Link to="/">Home</Link>
      <div>
        {birds.map((oneBird) => <GlobalBird key={oneBird?.id} bird={oneBird} />)}
      </div>
    </>
  )
}

export default GlobalBirdList
