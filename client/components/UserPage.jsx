/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import GlobalBird from './GlobalBird'

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
