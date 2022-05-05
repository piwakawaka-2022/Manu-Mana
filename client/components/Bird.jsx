import React from 'react'
import { useSelector } from 'react-redux'

function Bird () {
  const birds = useSelector(globalState => globalState.birds)

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default Bird
