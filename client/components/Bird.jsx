import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AddBirdSighting from './AddBirdSighting'

function Bird () {
  const birds = useSelector(globalState => globalState.birds)
  const auth = useSelector((redux) => redux.auth)

  const { id } = useParams()

  const birdData = birds.filter(bird => bird.id === Number(id))

  console.log(id)

  return (
    <>
      <div>{auth.isAuthenticated ? (<AddBirdSighting bird={birdData} />) : null }</div>
      <div>
        <img src={birdData[0]?.photo} height='300px'/>
        <h1> {birdData[0]?.maori_name} </h1>
        <h2> {birdData[0]?.name} </h2>
        <p> {birdData[0]?.description} </p>
        <p> {birdData[0]?.meaning} </p>
      </div>

    </>
  )
}

export default Bird
