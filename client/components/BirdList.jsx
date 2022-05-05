import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Bird from './Bird'

function BirdList () {
  const birds = useSelector(globalState => globalState.birds)

  return (
    <>
      <Link to="/">Home</Link>
      <p>Bird List</p>
      <div>
        {birds.map((oneBird) => <Bird key={oneBird?.id} bird={oneBird} />)}
      </div>
    </>
  )
}

export default BirdList
