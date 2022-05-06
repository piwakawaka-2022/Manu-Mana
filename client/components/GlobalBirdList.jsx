import React from 'react'
import { useSelector } from 'react-redux'

import GlobalBird from './GlobalBird'

function GlobalBirdList () {
  const birds = useSelector(globalState => globalState.birds)
  console.log(birds)
  return (
    <>
      <h1>Birds you're likely to see in Poneke!</h1>
      <div>
        {birds.map((oneBird) => <GlobalBird key={oneBird?.id} bird={oneBird} />)}
      </div>
    </>
  )
}

export default GlobalBirdList
