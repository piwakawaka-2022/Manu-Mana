/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import GlobalBird from './GlobalBird'

// The data we want to get for this page is an array of recently sighted birds FOR this user (limit to 10 or so?)
// The API call will connect to the get all birds users route ('/api/v1/birdlist') - then filter where bird.user_id matches id (as below)
// Action/Thunk will return an array of bird objects { name, maori_name, timestamp, location }
// Can probably use same action/thunk for this page and GlobalBirdList as it is returning the same information
function UserPage () {
  const birds = useSelector(globalState => globalState.birds)

  const { id } = useParams()

  const birdData = birds.filter(bird => bird.user_id === Number(id))

  return (
    <>
      <Link to="/">Home</Link>
      <h1>{'Here\'s a list of birds you\'ve seen!'}</h1>
      <div>
        {birdData.map((oneBird) => <GlobalBird key={oneBird?.id} bird={oneBird} />)}
      </div>
    </>
  )
}

export default UserPage
