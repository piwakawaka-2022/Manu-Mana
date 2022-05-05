import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import GlobalBird from './GlobalBird'

function GlobalBirdList () {
  const birds = useSelector(globalState => globalState.birds)

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
